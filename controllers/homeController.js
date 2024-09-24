// controllers/homeController.js
const Country = require('../models/Country');
const States = require('../models/States');
const BusinessType = require('../models/BusinessType');
const Vendor = require('../models/Vendor');
const Products = require('../models/Products');
const Wishlist = require('../models/Wishlist');
const Webinar = require('../models/Webinar');
const Category = require('../models/Category');
const Reviews = require('../models/Reviews');

const paginate = require('../helper/pagination');
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

   // Fetch sponsored vendors section
    data['sponsored_vendors'] = await Vendor.findAll({
        where: {
            activated_account: 'Y',
            status: 'Y',
            blocked_account: 'N',
            vendor_type: 1,
        },
        attributes: ['id', 'name', 'logo', 'slug'],
        limit: 4
    });

    enrichVendorData = await Promise.all(
        data['sponsored_vendors'].map(async (sponsored_vendor) => {
            try {
                // Fetch rating and rating counts by passing the vendor's ID
                const rating = await Vendor.vendorRating(sponsored_vendor.id);
                const rating_counts = await Vendor.vendorRatingCounts(sponsored_vendor.id);

                // Return the updated object with rating and rating counts
                return {
                    ...sponsored_vendor.toJSON(), // Convert to plain object
                    rating: rating,
                    rating_counts: rating_counts
                };
            } catch (error) {
                console.error('Error fetching sponsored_vendors for:', sponsored_vendor, error);

                // Handle errors and return the object with default rating and counts
                return {
                    ...sponsored_vendor.toJSON(), // Convert to plain object
                    rating: 0,
                    rating_counts: 0
                };
            }
        })
    );

    data['sponsored_vendors'] = enrichVendorData;
    
    res.status(200).json(data);

};


exports.VetPracticeProducts = async (req, res) => {
    try {
        const data = {};
        data['page_type'] = 'homepage';
        data['customer_id'] = req.header('type') ?? null;

        const business_type_id = req.query.category_id;
        const business_type = await BusinessType.findByPk(business_type_id);

        // Await the category query to get the results
        const categories = await Category.findAll({
            where: { business_type: business_type_id },
            attributes: ['id']
        });

        // Extract category IDs from the returned categories
        const categoryIds = categories.map(category => category.id);

        // const vet_practice_product_ids = await Products.findAll({

        //     attributes: ['product_id'],
        //     where: {
        //         category_id: {
        //             [Op.in]: categoryIds // Use the extracted category IDs
        //         }
        //     },
        //     raw: true // return plain object instead of Sequelize model instances
        // }).then(products => products.map(product => product.product_id)); // Use .then() to map the results

        data['vet_practice_products'] = await Products.findAll({
            where: {
              id: {
                [Op.in]: [1, 2, 3]
              }
            },
            include: [
              {
                model: Category,
                as: 'categories',
                through: { attributes: [] }, // Hide intermediate table data
                attributes: ['id', 'name'],  // Specify category attributes you want to retrieve
              },
              {
                association: 'vendor', // Make sure 'vendor' is associated properly in the Product model
                required: true,
                attributes: ['id', 'name', 'slug', 'logo', 'email']
              }
            ],
            attributes: ['id', 'type', 'name', 'slug', 'sku', 'meta_keywords', 'meta_description', 'price', 'price_catalog', 'image', 'vendor_id', 'vendor_product_url', 'price_discounted', 'price_discounted_start', 'price_discounted_end', 'price_range_max', 'price_range_min', 'in_stock', 'hot', 'created_at', 'quantity']
        });
          

        res.status(200).json(data);
    } catch (error) {
        res.status(201).json({ error: error.message });
    }
};

//     $vet_practice_product_ids = Product::select('product_id')->from('category_product')->whereIn('category_id', $category)->pluck('product_id');
//     $data['vet_practice_products'] = Product::with('categories')->whereHas('vendor')->whereIn('id', $vet_practice_product_ids)->select('id','type','name','slug','sku','meta_keywords','meta_description','price','price_catalog','image', 'vendor_id', 'vendor_product_url','price_discounted','price_discounted_start','price_discounted_end', 'price_range_max','price_range_min','in_stock','hot' ,'created_at' ,'quantity')->paginate(12);
//     foreach ($data['vet_practice_products'] as $vet_practice_product) {
//         //show price check
//         $vet_practice_product->price_show_to_logged_in_user_only = Product::showPriceOld($vet_practice_product);
//         $vet_practice_product->see_price = Product::showPrice($vet_practice_product, $data['customer_id']);            
//         if($vet_practice_product->type == 'variation'){
//             $vet_practice_product->range = \App\Models\Product::getSubItemsPriceRange($vet_practice_product->id);
//         }
//         $vet_practice_product->rating= $vet_practice_product->getReviews($vet_practice_product->id);
//         $vet_practice_product->reviews_count = Review::where(['product_id' => $vet_practice_product->id, 'status' => 'Y'])->count();
//         if (isset($data['customer_id'])) {
//             $vet_practice_product->wishlist = Product::isWishlistProduct($vet_practice_product->id,  $data['customer_id']);
//         }
//         $vet_practice_product->parent_category = array_map(function($businessType) {
//             return [
//                 'id' => $businessType['id'],
//                 'name' => $businessType['name']
//             ];
//         }, $businessType);
//         // Product::createIpression($different_categories_product);
//     }
//     return response()->json($data, 200);
// }

//     //Dvm sponsored vendors
//     $data['sponsored_vendors'] = Vendor::whereHas('products')->where(['status' => 'Y' , 'vendor_type' => 1,'activated_account'=>'Y','blocked_account'=>'N' ])->select('id', 'name', 'logo', 'slug')->take(4)->get();
//     foreach($data['sponsored_vendors'] as $vendor){
//         $vendor->rating = round($vendor->vendor_rating($vendor->id), 0);
//         $vendor_id = $vendor->id;
        
//     }
    
//     return response()->json($data, 200);
// }


