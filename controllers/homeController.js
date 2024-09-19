// controllers/homeController.js
const Country = require('../models/Country');
const States = require('../models/States');
const BusinessType = require('../models/BusinessType');
const Vendor = require('../models/Vendor');
const Products = require('../models/Products');
const Wishlist = require('../models/Wishlist');
const Webinar = require('../models/Webinar');

const { Op } = require('sequelize');


exports.getCountries = async (req, res) => {
    try {
        const countries = await Country.findAll({
            attributes: ['id', 'name']
        });
        res.status(200).json({allCountries: countries});
    } catch (error) {
        res.status(201).json({ error: error.message });
    }
};

exports.getStates = async (req, res) => {
    try {
        const states = await States.findAll({
            attributes: ['id', 'name'],
            where:{
                country_id: req.params.id,
            }
        });
        res.status(200).json({allStates: states});
    } catch (error) {
        res.status(201).json({ error: error.message });
    }
};
exports.mainSideBar = async (req, res) => {
    try {
        const data = {};
        data['shop_by_department'] = await BusinessType.findAll({
            attributes : { exclude: ['long_description']},
            where: {
                status: "Y",
                show_in_main_menu: "Y",
            },
            order: [['display_position', 'ASC']],
        });

        // Use async/await correctly for assignment
        const enrichedDepartments = await Promise.all(
            data['shop_by_department'].map(async (shop_by_department) => {
                try {
                    const subCategories = await BusinessType.getSubCategories(shop_by_department);
                    // Return the updated object with subcategories
                    return {
                        ...shop_by_department.toJSON(), // Convert to plain object
                        sub_categories: subCategories
                    };
                } catch (error) {
                    console.error('Error fetching subcategories for:', shop_by_department.slug, error);
                    // Handle errors and return the object with an empty array
                    return {
                        ...shop_by_department.toJSON(), // Convert to plain object
                        sub_categories: []
                    };
                }
            })
        );

        data['shop_by_department'] = enrichedDepartments;

        //now add vendors to data array
        data['vendors'] = await Vendor.findAll({
            where : {
                status: 'Y',
                vendor_type: 1,
                activated_account: 'Y',
                blocked_account: 'N',
            },
            attributes : ['id', 'name', 'slug'],
            limit : 15
        });

        //now add service providers to data array
        data['serviceProviders'] = await Vendor.findAll({
            where : {
                status: 'Y',
                vendor_type: 2,
                activated_account: 'Y',
                blocked_account: 'N',
            },
            attributes : ['id', 'name', 'slug'],
            limit : 15
        });
        res.status(200).json(data);
    } catch (error) {
        console.error('Error in mainSideBar function:', error);
        res.status(500).json({ error: error.message });
    }
};

exports.homePageDataV2 =  async (req , res) => {
    const data = {};
    data['page_type'] = 'homepage';
    data['customer_id'] = req.header('type') ?? null;

   // Utility function to enrich products
    const enrichProductData = async (products, customerId) => {
        return Promise.all(
            products.map(async (product) => {
                try {
                    const showPriceOld = await Products.showPriceOld(product.id);
                    const seePrice = await Products.showPrice(product.id, customerId);
                    const reviews = await Products.getReviews(product.id);
                    const reviewsCount = await Products.reviewCounts(product.id);

                    let wishlistData = null;
                    if (customerId) {
                        wishlistData = await Wishlist.getProductWishlistStatus(product.id, customerId);
                    }

                    return {
                        ...product.toJSON(), // Convert to plain object
                        price_show_to_logged_in_user_only: showPriceOld,
                        see_price: seePrice,
                        rating: reviews,
                        reviews_count: reviewsCount,
                        wishlist: wishlistData
                    };
                } catch (error) {
                    console.error('Error fetching product data for:', product.slug, error);
                }
            })
        );
    };

    // Hot products
    data['hot_products'] = await Products.getHotProducts(4);
    data['hot_products'] = await enrichProductData(data['hot_products'], data['customer_id']);

    // Featured products
    data['featured_products'] = await Products.getFeaturedProducts(8, false);
    data['featured_products'] = await enrichProductData(data['featured_products'], data['customer_id']);

    // Latest products
    data['latest_products'] = await Products.getLatestProducts(8, false) || [];
    data['latest_products'] = await enrichProductData(data['latest_products'], data['customer_id']);

    // Deals of the day products
    data['deals_of_the_day'] = await Products.getDealsOfTheDayProducts(8, true) || [];
    data['deals_of_the_day'] = await enrichProductData(data['deals_of_the_day'], data['customer_id']);

    //veterinary categories products
    const vet_practice_product_categories = ['Surgical Equipment','Grooming','Pharmaceuticals','Diagnostics','X-Ray and Imaging','Vaccines','Monitors','Orthopedics','Anesthesia','Dentistry' ];

    data['vet_practice_product_categories'] = await BusinessType.findAll({
        where : {
            name: {
                [Op.in]: vet_practice_product_categories // Array of category names
            }
        },
        attributes: ['id', 'name','slug'] // Selecting specific columns
    });

    //upcoming expo data
    let display_on = ['2', '3']; // form dvm 2 and 3 display
    const currentDate = new Date(); // Get the current date in JavaScript

    data['upcoming_expo'] = await Webinar.findOne({
        where: {
            display_on: {
                [Op.in]: display_on // Array of display numbers
            },
            show_in_app: 1,
            webinar_type: 'website',
            status: 'Y',
            start_date: {
                [Op.gt]: currentDate // Matches '>' condition in Laravel
            }
        },
        attributes: {
            exclude: ['course_about', 'learning_objectives', 'speaker'] // Exclude fields
        }
    });

    //sponsored vendors section 
    data['sponsored_vendors'] = await Vendor.findAll({
        where :{
            activated_account : 'Y',
            status : 'Y',
            blocked_account : 'N',
            vendor_type : 1,
        },
        attributes : ['id', 'name', 'logo','slug'],
        limit : 4
    });
    enrichVendorData = await Promise.all(
        data['sponsored_vendors'].map(async (sponsored_vendors) => {
            try {
                const rating = await Vendor.vendor_rating(sponsored_vendors);
                // Return the updated object with subcategories
                return {
                    ...sponsored_vendors.toJSON(), // Convert to plain object
                    rating: rating
                };
            } catch (error) {
                console.error('Error fetching sponsored_vendors for:', sponsored_vendors, error);
                // Handle errors and return the object with an empty array
                return {
                    ...sponsored_vendors.toJSON(), // Convert to plain object
                    rating: 0
                };
            }
        })
    );

    data['sponsored_vendors'] = enrichVendorData;

    res.status(200).json(data);

};

//     //Dvm sponsored vendors
//     $data['sponsored_vendors'] = Vendor::whereHas('products')->where(['status' => 'Y' , 'vendor_type' => 1,'activated_account'=>'Y','blocked_account'=>'N' ])->select('id', 'name', 'logo', 'slug')->take(4)->get();
//     foreach($data['sponsored_vendors'] as $vendor){
//         $vendor->rating = round($vendor->vendor_rating($vendor->id), 0);
//         $vendor_id = $vendor->id;
//         $vendor['rating_counts'] = Review::whereHas('product', function ($query) use ($vendor_id) {
//             $query->where('vendor_id', '=', $vendor_id);
//         })->where([
//             ['rating', '!=', 0],
//             ['status', '=', 'Y']
//         ])->count();
//     }
    
//     return response()->json($data, 200);
// }


