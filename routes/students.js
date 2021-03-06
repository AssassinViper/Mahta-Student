const express = require('express');
const router = express.Router();
// const jwt = require('jsonwebtoken');
// const mongoose = require('mongoose');

const withAuth = require('../auth/middleware');
const consts = require('../utils/consts');
const config = require('../config/config');
const studentHandler = require('../utils/studentHandler');
const errHandler = require('../utils/errHandler');

// Bring in Models
let Student = require('../models/student');

// authenticate process
router.post('/authenticate', (req, res) => {

    const { code } = req.body;

    Student.findOne({ code: code }, function(err, student) {

        if (err) {
            errHandler(err);

        } else if (!student) {

            res.status(consts.UNAUTHORIZED_CODE)
                .json({
                    error: consts.INCORRECT_MAHTA_ID
                });

        } else if (student) { // if found student

            if (!student.firstName || !student.lastName){ // if student was not registered
                res.status(consts.SUCCESS_CODE).json({registered : false});
            
            } else {

                try {
                    // send the code of student az the token, expires in 1 Day
                    res.cookie('code', code, {expires: new Date(Date.now()+ 259200000)}).
                    status(consts.SUCCESS_CODE).json({registered: true});
    
                } catch (e) {
                    config.log(e)
                }
            }

        } else {

            res.status(consts.UNAUTHORIZED_CODE)
                .json({
                    error: consts.INCORRECT_PASSWORD
                });
        }
    });

});

router.post('/checkToken', withAuth, function(req, res) {

    res.sendStatus(consts.SUCCESS_CODE);
});

router.post('/logout', (req, res)=>{
    res.cookie('code', 0, {expires: new Date(Date.now()+ 1)}).sendStatus(consts.SUCCESS_CODE);
});

router.post('/signup1', studentHandler.signUp1);

router.post('/signup2', studentHandler.signUp2);

router.post('/getInfo', withAuth,  studentHandler.getInfo);

module.exports = router;