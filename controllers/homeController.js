// controllers/homeController.js
const Country = require('../models/Country');
const States = require('../models/States');

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