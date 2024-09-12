const express = require('express');
const router = express.Router();

//controller imports
const userController = require('../controllers/userController');
const homeController = require('../controllers/homeController');
const speakersController = require('../controllers/speakersController');

router.post('/users', userController.createUser);
router.get('/users', userController.getUsers);



//routes for dvm central
router.get('/countries', homeController.getCountries);
router.get('/states/:id', homeController.getStates);
router.get('/mainSideBar', homeController.mainSideBar);
router.get('/home-v2', homeController.homePageDataV2);

//speaker routes for vetandtech
router.get('/speakers', speakersController.getSpeakers);


module.exports = router;