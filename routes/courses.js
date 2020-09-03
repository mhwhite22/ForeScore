var express = require('express');
var router = express.Router();
const coursesCtrl = require('../controllers/courses');
 // see server
router.get('/', coursesCtrl.index);
router.get('/new', coursesCtrl.new);
router.get('/:id', coursesCtrl.show);
router.post('/', coursesCtrl.create);
router.get('/:id/edit', coursesCtrl.edit);
router.put('/:id', coursesCtrl.update);
router.delete('/:id', coursesCtrl.delete);





function isLoggedIn(req, res, next) {
    if (req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;
