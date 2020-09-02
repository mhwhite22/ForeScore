var express = require('express');
var router = express.Router();
const roundsCtrl = require('../controllers/rounds');

router.get('/', roundsCtrl.index);
//router.get('/rounds/show', roundsCtrl.show);
router.get('/new', roundsCtrl.new);
router.post('/', roundsCtrl.create);


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;
