const Speaker = require('../models/Speakers');


exports.getSpeakers = async (req, res) => {
    try {
        const { name, email } = req.body;
        const speakers = await Speaker.findAll({
            where:{
                status : 'Y'
            }
        }

        );
        res.status(200).json(speakers);
    } catch (error) {
        res.status(201).json({ error: error.message });
    }
};