var express = require('express');
var router = express.Router();
const coursesCtrl = require('../controllers/courses');
 // see server
router.get('/', coursesCtrl.index);
//router.get('/rounds/show', roundsCtrl.show);
router.get('/new', coursesCtrl.new);
router.post('/', coursesCtrl.create);


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;
