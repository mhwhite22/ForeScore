var express = require('express');
var router = express.Router();
const roundsCtrl = require('../controllers/rounds');

router.get('/rounds', roundsCtrl.index);
//router.get('/rounds/show', roundsCtrl.show);
router.get('/rounds/new', roundsCtrl.new);


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;
