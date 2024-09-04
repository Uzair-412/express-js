const Speakers = require('../models/Speaker');
const Pages = require('../models/Pages');
const Events = require('../models/Events');
const Webinar = require('../models/Webinar');
const moment = require('moment-timezone');  // Use moment for date handling

const { Op } = require('sequelize');


exports.getSpeakers = async (req, res) => {
    const data = {};
    const currentDate = moment().tz('UTC').format('YYYY-MM-DD HH:mm:ss');  // Format to match database

    try {

        const pageData = await Pages.findOne({
            where:{
                id : 28
            }
        });
        // Assign page metadata to the data object if pageData exists
        if (pageData) {
            data['meta_title'] = pageData.meta_title;
            data['meta_keywords'] = pageData.meta_keywords;
            data['meta_description'] = pageData.meta_description;
        }

        // dd("currentDate :"+currentDate);
        data['speakers'] = await Speakers.findAll({
            where: {
                status: 'Y',

            },
            attributes: { exclude: ['bio'] },
            include: [
                {
                    association: 'webinar_speakers',  // Filtered many-to-many relationship
                    attributes: { exclude: ['course_about', 'learning_objectives'] },
                    where: {
                        show_in_app: 1,
                        webinar_type: 'website',
                        status: 'Y',
                        start_date: {
                            [Op.gte]: currentDate,
                        },
                    },
                    required: false, // This makes sure speakers are returned even if there are no matching speaker_past_webinars
                    order: [['start_date', 'ASC']],
        
                },
                
                {
                    association: 'speaker_past_webinars',  // Past webinars relationship
                    attributes: { exclude: ['course_about', 'learning_objectives'] },
                    where: {
                        show_in_app: 1,
                        webinar_type: 'website',
                        status: 'Y',
                        start_date: {
                            [Op.lt]: currentDate,
                        },
                    },
                    required: false, // This makes sure speakers are returned even if there are no matching speaker_past_webinars
                    order: [['start_date', 'ASC']],
                }
            ],
            order: [['position', 'ASC']],
        });

        if (data['speakers'].length > 0) {
            data['speakers'].forEach(speaker => {
                // Handle WebinarSpeakers dates
                if (speaker.WebinarSpeakers && speaker.WebinarSpeakers.length > 0) {
                    speaker.WebinarSpeakers.forEach(webinarSpeaker => {
                        webinarSpeaker.start_date_app = moment(webinarSpeaker.start_date).format('MMM D, YYYY');
                        webinarSpeaker.start_time = moment(webinarSpeaker.start_date).format('h:mm A');
                        webinarSpeaker.start_date = moment(webinarSpeaker.start_date).format('MMM D, YYYY');
                    });
                }

                // Handle SpeakerPastWebinars dates
                if (speaker.SpeakerPastWebinars && speaker.SpeakerPastWebinars.length > 0) {
                    speaker.SpeakerPastWebinars.forEach(speakerPastWebinar => {
                        speakerPastWebinar.start_date_app = moment(speakerPastWebinar.start_date).format('MMM D, YYYY');
                        speakerPastWebinar.start_time = moment(speakerPastWebinar.start_date).format('h:mm A');
                        speakerPastWebinar.start_date = moment(speakerPastWebinar.start_date).format('MMM D, YYYY');
                    });
                }
            });
        }


        data['speakersWithWebinars'] = await Webinar.findAll({
            where: {
                show_in_app: 1,
                webinar_type: 'website',
                end_date: { [Op.gte]: new Date() },
                status: 'Y'
            },
            include: [{
                model: Speakers, 
                as: 'speakers', 
                attributes: ['id', 'slug', 'first_name', 'last_name', 'credentials', 'institute', 'job_title', 'profile']
            }],
            order: [['start_date', 'ASC']]
        });
          
        speakersWithWebinars.forEach(webinar => {
            delete webinar.course_about;
        });


        // data['webinars'] = await Webinar.findAll({
        //     where: {
        //         show_in_app: 1,
        //         webinar_type: 'website',
        //         status: 'Y',
        //         start_date: {
        //             [Op.gte]: new Date()
        //         }
        //     },
        //     include: [{
        //       model: Speakers
        //     }]
        // });


        data['event'] = await Events.findOne({
            where:{
                id : 7
            }
        });

        //breadcrumbs 
        data['breadcrumbs'] = [];
        data['breadcrumbs'].push({'name': 'speakers', 'link': 'speakers'});

        //page type
        data['page_type'] = 'speakers_list';

        res.status(200).json(data);
    } catch (error) {
        res.status(201).json({ error: error.message });
    }
};