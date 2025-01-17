const express = require('express');
const router = express.Router();
const Controller = require('../../src/controllers/user.controller');

router.get('/',Controller.userController);
router.get('/create',Controller.createUser);
router.get('/update',Controller.userUpdate);
router.get('/find',Controller.FindUsers);



module.exports = router;