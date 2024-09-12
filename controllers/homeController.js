// controllers/homeController.js
const Country = require('../models/Country');
const States = require('../models/States');
const BusinessType = require('../models/BusinessType');
const Vendor = require('../models/Vendor');
const Products = require('../models/Products');

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

    data['hot_products'] = await Products.getNewProducts(4);
    // Use async/await correctly for assignment
    const enrichedProductsData = await Promise.all(
        data['hot_products'].map(async (hot_product) => {
            try {
                const showPriceOld = await Products.showPriceOld(hot_product.id);
                const seePrice = await Products.showPrice(hot_product.id, data['customer_id']);
                const reviews = await Products.getReviews(hot_product.id);
                const reviewsCount = await Products.reviewCounts(hot_product.id);
                return {
                    ...hot_product.toJSON(), // Convert to plain object
                    price_show_to_logged_in_user_only: showPriceOld,
                    see_price: seePrice,
                    rating : reviews,
                    reviews_count : reviewsCount
                };
            } catch (error) {
                console.error('Error fetching subcategories for:', hot_product.slug, error);
                return {
                    ...hot_product.toJSON(), // Convert to plain object
                    price_show_to_logged_in_user_only: null
                };
            }
        })
    );

    data['hot_products'] = enrichedProductsData;

    res.status(200).json(data);

};

//     //hot products data fetching
//     $data['hot_products'] = Product::getHotProducts(4);
//     foreach ($data['hot_products'] as $hot_product) {
//         //show price check
//         $hot_product->price_show_to_logged_in_user_only = Product::showPriceOld($hot_product);
//         $hot_product->see_price = Product::showPrice($hot_product, $data['customer_id']);            
//         if($hot_product->type == 'variation'){
//             $hot_product->range = \App\Models\Product::getSubItemsPriceRange($hot_product->id);
//         }
//         $hot_product->rating= $hot_product->getReviews($hot_product->id);
//         $hot_product->reviews_count = Review::where(['product_id' => $hot_product->id, 'status' => 'Y'])->count();
//         if (isset($data['customer_id'])) {
//             $hot_product->wishlist = Wishlist::where(['customer_id' => $data['customer_id'], 'product_id' => $hot_product->id])->exists();
//         }
        
//         // Product::createIpression($different_categories_product);
//     }

    //featured products data fetching
//     $data['featured_products'] = Product::getFeaturedProducts(8, false); //false flag for paginate false
//     foreach ($data['featured_products'] as $featured_products) {
//         //show price check
//         $featured_products->price_show_to_logged_in_user_only = Product::showPriceOld($featured_products);
//         $featured_products->see_price = Product::showPrice($featured_products, $data['customer_id']);            
//         if($featured_products->type == 'variation'){
//             $featured_products->range = \App\Models\Product::getSubItemsPriceRange($featured_products->id);
//         }
//         $featured_products->rating= $featured_products->getReviews($featured_products->id);
//         $featured_products->reviews_count = Review::where(['product_id' => $featured_products->id, 'status' => 'Y'])->count();
//         if (isset($data['customer_id'])) {
//             $featured_products->wishlist = Wishlist::where(['customer_id' => $data['customer_id'], 'product_id' => $featured_products->id])->exists();
//         }
        
//         // Product::createIpression($different_categories_product);
//     }
//     //latest vet products
//     $data['latest_products'] = Product::getLatestProducts(8, false); //false flag for paginate false
//     foreach ($data['latest_products'] as $latest_product) {
//         //show price check
//         $latest_product->price_show_to_logged_in_user_only = Product::showPriceOld($latest_product);
//         $latest_product->see_price = Product::showPrice($latest_product, $data['customer_id']);            
//         if($latest_product->type == 'variation'){
//             $latest_product->range = \App\Models\Product::getSubItemsPriceRange($latest_product->id);
//         }
//         $latest_product->rating= $latest_product->getReviews($latest_product->id);
//         $latest_product->reviews_count = Review::where(['product_id' => $latest_product->id, 'status' => 'Y'])->count();
//         if (isset($data['customer_id'])) {
//             $latest_product->wishlist = Wishlist::where(['customer_id' => $data['customer_id'], 'product_id' => $latest_product->id])->exists();
//         }
        
//         // Product::createIpression($different_categories_product);
//     }
    
//     //today deals products
//     $data['deals_of_the_day_limited'] = Product::getDealsOfTheDayProductsLimited(8, true); //true flag for with coupons true
//     foreach ($data['deals_of_the_day_limited'] as $deals_of_the_day) {
//         //show price check
//         $deals_of_the_day->price_show_to_logged_in_user_only = Product::showPriceOld($deals_of_the_day);
//         $deals_of_the_day->see_price = Product::showPrice($deals_of_the_day, $data['customer_id']);            
//         if($deals_of_the_day->type == 'variation'){
//             $deals_of_the_day->range = \App\Models\Product::getSubItemsPriceRange($deals_of_the_day->id);
//         }
//         $deals_of_the_day->vendorWithSelectedColumns->vendor_coupon;
//         $deals_of_the_day->unit_sold =  DB::table('orders')
//             ->join('orderitems', 'orderitems.order_id', '=', 'orders.id')
//             ->where('orderitems.product_id', $deals_of_the_day->id)
//             ->where('orders.order_status', 7)
//             ->select(DB::raw('SUM(orderitems.quantity) as quantity'))->count();
//         $deals_of_the_day->actual_quantity = $deals_of_the_day->unit_sold + $deals_of_the_day->quantity;
//         $deals_of_the_day->quantity_left = $deals_of_the_day->quantity == null ? 0 : $deals_of_the_day->quantity;
//         // Product::createIpression($different_categories_product);
//     }
//     $vet_practice_product_categories = ['Surgical Equipment','Grooming','Pharmaceuticals','Diagnostics'
//         ,'X-Ray and Imaging','Vaccines','Monitors','Orthopedics','Anesthesia','Dentistry'
//     ];
//     $categories = BusinessType::whereIn('name', $vet_practice_product_categories)
//     ->get(['id', 'name'])
//     ->toArray();

//     $data['vet_practice_product_categories'] = array_map(function($category) {
//         return [
//             'id' => $category['id'],
//             'name' => $category['name']
//         ];
//     }, $categories);
//     //upcoming expo
//     $displayOn =  ['2', '3'];  //for dvm
//     $data['upcoming_expo'] = Webinar::with('speaker:id,first_name,last_name,profile,slug,job_title,institute')->whereIn('display_on',$displayOn)->where([['show_in_app', 1], ['webinar_type', 'website'], ['status', 'Y']])->where('start_date',  '>', date('y-m-d h:i:s'))->first();
//     unset($data['upcoming_expo']->course_about,$data['upcoming_expo']->learning_objectives,$data['upcoming_expo']->speaker);

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


