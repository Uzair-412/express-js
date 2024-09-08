// controllers/homeController.js
const Country = require('../models/Country');
const States = require('../models/States');
const BusinessType = require('../models/BusinessType');
const Vendor = require('../models/Vendor');

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




// $data['shop_by_department'] = BusinessType::where(['status' => 'Y', 'show_in_main_menu' => 'Y'])
//         ->orderByRaw('display_position IS NULL, display_position ASC')->get();
//         foreach($data['shop_by_department'] as $businessType){
//             $businessType->subcategories = BusinessType::getSubCategories($businessType);
//         }
//         $data['vendors'] = Vendor::where(['status' => 'Y' , 'vendor_type' => 1,'activated_account'=>'Y','blocked_account'=>'N' ])->select('id', 'name', 'slug')->take(15)->get();
//         $data['serviceProviders'] = Vendor::where(['status' => 'Y' , 'vendor_type' => 2,'activated_account'=>'Y','blocked_account'=>'N' ])->select('id', 'name', 'slug')->take(15)->get();
        
//         return response()->json($data, 200);