const router = require('express').Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome To ForeScore' });
});

router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email']}
));
router.get('/oauth2callback', passport.authenticate('google', 
  {
    successRedirect: '/rounds',
    failureRedirect: '/',
    }
));
router.get('/logout', function(req, res) {
  req.logout();
  console.log('logout')
  res.redirect('index');
});

module.exports = router;
