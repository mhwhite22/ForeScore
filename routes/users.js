var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/users');

router.get('/users', usersCtrl.index);
router.get('/users/:id', usersCtrl.show);


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;
