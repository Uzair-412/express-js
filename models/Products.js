const { DataTypes, Op } = require('sequelize');
const db = require('../config/database');
const sequelize = require('../config/database');
const Vendor = require('./Vendor');
const VendorUsersImport = require('./VendorUsersImport');
const User = require('./User');
const Reviews = require('./Reviews');
const Category = require('./Category');
const CategoryProduct = require('./CategoryProduct');
const paginate = require('sequelize-paginate');

// Define the Products model
const Products = db.define('Products', {
    id: {
        type: DataTypes.BIGINT(20).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    vendor_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        defaultValue: 0
    },
    business_type: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        defaultValue: 0
    },
    parent_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        defaultValue: 0
    },
    type: {
        type: DataTypes.ENUM('simple', 'variation', 'child'),
        allowNull: false,
        defaultValue: 'simple',
        collate: 'utf8mb4_unicode_ci'
    },
    shipping_type: {
        type: DataTypes.ENUM('miles', 'place', 'anywhere'),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    shipping_miles: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true
    },
    level: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        defaultValue: 1
    },
    family: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true,
        defaultValue: 0
    },
    name: {
        type: DataTypes.STRING(191),
        allowNull: false,
        collate: 'utf8mb4_unicode_ci'
    },
    caption: {
        type: DataTypes.STRING(32),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    caption_type: {
        type: DataTypes.ENUM('Select the size and color you want to order', 'Select the size you want to order', 'Select the color you want to order'),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    slug: {
        type: DataTypes.STRING(191),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    sku: {
        type: DataTypes.STRING(191),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    sku_stripped: {
        type: DataTypes.STRING(191),
        allowNull: false,
        collate: 'utf8mb4_unicode_ci'
    },
    sku_variations: {
        type: DataTypes.TEXT,
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    wholesale_price: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: true
    },
    price: {
        type: DataTypes.DOUBLE(9, 2),
        allowNull: true
    },
    price_range_min: {
        type: DataTypes.DOUBLE(9, 2),
        allowNull: true
    },
    price_range_max: {
        type: DataTypes.DOUBLE(9, 2),
        allowNull: true
    },
    price_catalog: {
        type: DataTypes.DOUBLE(9, 2),
        allowNull: true
    },
    price_discounted: {
        type: DataTypes.DOUBLE(9, 2),
        allowNull: true
    },
    price_discounted_start: {
        type: DataTypes.DATE,
        allowNull: true
    },
    price_discounted_end: {
        type: DataTypes.DATE,
        allowNull: true
    },
    vendor_product_url: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    in_stock: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y',
        collate: 'utf8mb4_unicode_ci'
    },
    check_quantity: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N',
        collate: 'utf8mb4_unicode_ci'
    },
    quantity: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    max_quantity_threshold: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    minimum_order: {
        type: DataTypes.TINYINT(3),
        allowNull: true,
        defaultValue: 0
    },
    on_allocation: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N',
        collate: 'utf8mb4_unicode_ci'
    },
    no_of_days: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    ship_type: {
        type: DataTypes.ENUM('intl', 'us'),
        allowNull: true,
        defaultValue: 'intl',
        collate: 'utf8mb4_unicode_ci'
    },
    ship_calc_type: {
        type: DataTypes.ENUM('auto', 'fixed'),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    fixed_shipping_fee: {
        type: DataTypes.STRING(16),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    length: {
        type: DataTypes.DOUBLE,
        allowNull: true
    },
    width: {
        type: DataTypes.DOUBLE,
        allowNull: true
    },
    height: {
        type: DataTypes.DOUBLE,
        allowNull: true
    },
    distance_unit: {
        type: DataTypes.STRING(10),
        allowNull: true,
        defaultValue: 'in',
        collate: 'utf8mb4_unicode_ci'
    },
    weight: {
        type: DataTypes.DOUBLE(8, 2).UNSIGNED,
        allowNull: true,
        defaultValue: 1.00
    },
    mass_unit: {
        type: DataTypes.STRING(10),
        allowNull: true,
        defaultValue: 'kg',
        collate: 'utf8mb4_unicode_ci'
    },
    taxable: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N',
        collate: 'utf8mb4_unicode_ci'
    },
    short_description: {
        type: DataTypes.TEXT,
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    full_description: {
        type: DataTypes.TEXT,
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    additional_information: {
        type: DataTypes.JSON,
        allowNull: true
    },
    pdf_link: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    video_link: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    video_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true
    },
    meta_title: {
        type: DataTypes.STRING(500),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    meta_keywords: {
        type: DataTypes.STRING(500),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    meta_description: {
        type: DataTypes.STRING(500),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    related_products: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    upsell_products: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    cross_sell_products: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    tags: {
        type: DataTypes.TEXT,
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    competitor_skus: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    visibility: {
        type: DataTypes.ENUM('1', '2', '3', '4'),
        allowNull: true,
        defaultValue: '1',
        collate: 'utf8mb4_unicode_ci'
    },
    featured: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N',
        collate: 'utf8mb4_unicode_ci'
    },
    hot: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N',
        collate: 'utf8mb4_unicode_ci'
    },
    new: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N',
        collate: 'utf8mb4_unicode_ci'
    },
    deals_of_the_day: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N',
        collate: 'utf8mb4_unicode_ci'
    },
    position: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y',
        collate: 'utf8mb4_unicode_ci'
    },
    image: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    resized: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N',
        collate: 'utf8mb4_unicode_ci'
    },
    image_org: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: 'no_selection',
        collate: 'utf8mb4_unicode_ci'
    },
    image_updated: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N',
        collate: 'utf8mb4_unicode_ci'
    },
    views: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true,
        defaultValue: 0
    },
    sales: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true,
        defaultValue: 0
    },
    banner_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true
    },
    faq_set_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true
    },
    is_set: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N',
        collate: 'utf8mb4_unicode_ci'
    },
    is_canonical: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N',
        collate: 'utf8mb4_unicode_ci'
    },
    show_individual: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N',
        collate: 'utf8mb4_unicode_ci'
    },
    link_type: {
        type: DataTypes.ENUM('simple', 'variation'),
        allowNull: true,
        defaultValue: 'variation',
        collate: 'utf8mb4_unicode_ci'
    },
    canonical_url: {
        type: DataTypes.STRING(255),
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    engravable: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'N',
        collate: 'utf8mb4_unicode_ci'
    },
    engraving_price: {
        type: DataTypes.FLOAT.UNSIGNED,
        allowNull: true,
        defaultValue: 0
    },
    do_index: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
        defaultValue: 'Y',
        collate: 'utf8mb4_unicode_ci'
    },
    sub_hash: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: '0',
        comment: 'Will store hash value combining the child skus',
        collate: 'utf8mb4_unicode_ci'
    },
    warranty: {
        type: DataTypes.TEXT,
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    schema: {
        type: DataTypes.TEXT,
        allowNull: true,
        collate: 'utf8mb4_unicode_ci'
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    tableName: 'products',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false
});

//associations
Products.belongsTo(Vendor, {
    foreignKey: 'vendor_id',
    as: 'vendor'
});

Products.getHotProducts = async function(limit = null) {
    const filter = {
        new: 'Y',
        order_by: 'rand',
        limit: limit,
        hot : 'Y',
        home_page_data : true
    };
    return this.getProducts(filter);
}
Products.getFeaturedProducts = async function(limit = null , paginate = null) {
    const filter = {
        order_by: 'rand',
        limit: limit,
        featured : 'Y',
        home_page_data : true
    };
    return this.getProducts(filter);
}
Products.getLatestProducts = async function(limit = null) {
    const filter = {
        order_by: 'rand',
        limit: limit,
        latest : 'Y',
        home_page_data : true
    };
    return this.getProducts(filter);
}
Products.getDealsOfTheDayProducts = async function(limit = null, coupon = null) {
    const filter = {
        order_by: 'rand',
        limit: limit,
        deals_of_the_day : 'Y',
        home_page_data : true
    };
    if(coupon)
        filter['coupons'] = true;
    return this.getProducts(filter);
}



Products.getProducts = async function(filter = {}) {
    const query = {
        where: {
            status: 'Y',
            parent_id: 0
        },

    };
    

    // const categories = await Category.findAll();
    // console.log(categories, 'categories');

    // process.exit();

    if (filter.parent_id) {
        query.where.parent_id = filter.parent_id;
    }
    if (filter.all) {
        query.include = [{ model: Vendor, attributes: ['id', 'name'] }];
    } else if (!filter.skus && !filter.admin) {
        query.where[Op.or] = [
            { type: { [Op.ne]: 'child' } },
            { show_individual: 'Y' }
        ];
    }
    if (!filter.admin) {
        query.where.status = 1;
        query.where[Op.or] = [
            { visibility: '1' },
            ...(filter.keywords ? [{ visibility: '3' }] : [{ visibility: '2' }])
        ];
    }
    if (filter.not) {
        query.where.id = { [Op.ne]: filter.not };
    }
    if (filter.find_ids && Array.isArray(filter.find_ids) && filter.find_ids.length > 0) {
        query.where.id = { [Op.in]: filter.find_ids };
    }
    if (filter.category_slug) {
        const category = await Category.findOne({ where: { slug: filter.category_slug }, attributes: ['id'] });
        filter.category_id = category ? category.id : null;
    }
    if (filter.category_id && filter.category_id > 0) {
        query.where.id = {
            [Op.in]: sequelize.literal(`(SELECT product_id FROM category_product WHERE category_id = ${filter.category_id})`)
        };
    }
    if (filter.category_ids && Array.isArray(filter.category_ids) && filter.category_ids.length > 0) {
        query.where.id = {
            [Op.in]: sequelize.literal(`(SELECT product_id FROM category_product WHERE category_id IN (${filter.category_ids.join(',')}))`)
        };
    }
    if (filter.visibility) {
        query.where.visibility = filter.visibility;
    }
    if (filter.business_type) {
        query.where.business_type = filter.business_type;
    }
    if (filter.vendor_id) {
        query.where.vendor_id = filter.vendor_id;
    }
    if (filter.brand_ids && Array.isArray(filter.brand_ids) && filter.brand_ids.length > 0) {
        query.where.vendor_id = { [Op.in]: filter.brand_ids };
    }
    if (filter.type) {
        query.where.type = filter.type;
    }
    if (filter.deals_of_the_day) {
        query.where.deals_of_the_day = filter.deals_of_the_day;
    }
    if (filter.hot) {
        query.where.hot = filter.hot;
    }
      

    if (filter.latest) {
        const startDate = new Date();
        startDate.setMonth(startDate.getMonth() - 3);
        query.where.created_at = {
            [Op.between]: [startDate, new Date()]
        };
        query.order = [['created_at', 'DESC']];
    }

    if (filter.name) {
        query.where.name = { [Op.iLike]: `%${filter.name}%` };
    }
    if (filter.sku) {
        query.where[Op.or] = [
            { sku: { [Op.iLike]: `%${filter.sku}%` } },
            { sku_stripped: { [Op.iLike]: `%${filter.sku}%` } }
        ];
    }
    if (filter.skus && Array.isArray(filter.skus) && filter.skus.length > 0) {
        query.where.sku = { [Op.in]: filter.skus };
    }
    if (filter.keywords) {
        // Handle keyword search logic
    }
    if (filter.terms) {
        // Handle terms search logic
    }
    if (filter.price_range) {
        const [pr_min, pr_max] = filter.price_range.replace('$', '').split('-').map(x => parseFloat(x.trim()));
        if (pr_min) {
            query.where.price = { [Op.gte]: pr_min };
        }
        if (pr_max) {
            query.where.price = { [Op.lte]: pr_max };
        }
    }
    if (!filter.limit) {
        filter.limit = 12;
    }
    if (filter.best_selling) {
        query.attributes = {
            include: [
                [sequelize.literal(`(SELECT count(*) FROM orderitems WHERE orderitems.product_id = products.id)`), 'product_counts']
            ]
        };
    }
    if (filter.order_by) {
        if (filter.order_by === 'rand') {
            query.order = sequelize.random();
        } else {
            query.order = [[filter.order_by, filter.order || 'ASC']];
        }
    } else if (filter.best_selling) {
        query.order = [[sequelize.literal('product_counts'), 'DESC']];
    } else {
        query.order = [
            ['position', 'ASC'],
            ['views', 'DESC'],
            ['id', 'DESC']
        ];
    }
    if (filter.keywords) {
        query.attributes = [
            'id', 'type', 'name', 'slug', 'sku', 'sku_stripped', 'sku_variations', 'price', 'price_catalog', 'image', 'vendor_id', 'vendor_product_url', 'max_quantity_threshold', 'price_discounted', 'price_discounted_start', 'price_discounted_end', 'hot', 'created_at', 'quantity','level'
        ];
    } else if (filter.all) {
        query.attributes = [
            'id', 'type', 'name', 'slug', 'sku', 'meta_keywords', 'meta_description', 'price', 'price_catalog', 'image', 'vendor_id', 'vendor_product_url', 'price_discounted', 'price_discounted_start', 'price_discounted_end', 'price_range_max', 'price_range_min', 'in_stock', 'hot', 'created_at', 'quantity','level'
        ];
    } else {
        query.attributes = [
            'id', 'type', 'name', 'slug', 'sku', 'meta_keywords', 'meta_description', 'price', 'price_catalog', 'image', 'vendor_id', 'vendor_product_url', 'price_discounted', 'price_discounted_start', 'price_discounted_end', 'price_range_max', 'price_range_min', 'in_stock', 'hot', 'created_at', 'quantity','level'
        ];
    }
    const limit = filter.limit;
    // If fetching data for the home page with a specific limit
    if (filter.home_page_data) {
        return this.findAll({ ...query, limit });
    
    // If fetching all data without pagination
    } else if (filter.all) {
        return this.findAll(query);
    
    // Otherwise, fetch paginated data (findAndCountAll returns both count and rows)
    } else {
        return this.findAndCountAll({
            ...query,
            limit,
            offset
        });
    }
};


Products.getProductWithVendor = async function(productID) {
    const product = await Products.findByPk(productID, {
        include: [
            {
                model: Vendor,
                as: 'vendor',            
            }
        ]
    });
    
    return product;
}


Products.showPriceOld = async function(productId) {
    // Find the product
    const product = await Products.getProductWithVendor(productId);
    
    const vendor = product?.vendor;

    return vendor.price_visibility === 'Y' ? 'Y' : 'N';

}

Products.showPrice = async function(productId, customerID) {

    //find customer
    const customer = await User.findByPk(customerID,{
        attributes : ['id', 'email']
    });
    

    // Find the product
    const product = await Products.getProductWithVendor(productId);

    if(product?.vendor && product.vendor.price_visibility === 'N')
        return 'without_login';
    
    if(product?.vendor && product.vendor.price_visibility === 'Y')
        return 'login';

    if(!customer && product.vendor  && product.vendor.price_visibility === 'A')
        return 'request';

    if(customer && product.vendor  && product.vendor.price_visibility === 'A')
    {
        const vendorUserImport = await VendorUsersImport.findOne({ 
            where: {
                vendor_id: product.vendor.id,
                user_email: customer.email,
            }
        });
        
        if(vendorUserImport && vendorUserImport.show_price === 'Y')
            return 'login';
        else if(vendorUserImport && vendorUserImport.show_price === 'N')
            return 'already-requested';
        else
            return 'request';

    }

    // delete(product.vendor);
}

Products.getReviews = async function (productID, withRating = true) {
    // Constructing the where clause
    const whereClause = {
        product_id: productID,
        status: 'Y'
    };

    // If withRating is true, add the rating filter
    if (withRating) {
        whereClause.rating = { [Op.ne]: 0 };  // ne for rating not equal to 0
    }

    // Fetch the review and calculate the average rating
    const review = await Reviews.findOne({
        where: whereClause,
        attributes: [
            [sequelize.literal('SUM(rating)/COUNT(*)'), 'Rating']
        ]
    });

    return review ? review.getDataValue('Rating') : null;
};

Products.reviewCounts = async function (productID){
    const reviewCount = await Reviews.count({
        where : {
            'product_id' : productID,
            'status' : 'Y'
        }
    });
    
    return reviewCount;
}

Products.associate = () => {
    Products.belongsToMany(Categories, {
        as: 'categories',
        through: CategoryProduct,
        foreignKey: 'product_id',
        otherKey: 'category_id'
      });
}

module.exports = Products;