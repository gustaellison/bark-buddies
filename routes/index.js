var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to Bark Finder' });
});

//Google Oath login route
router.get('/auth/google', passport.authenticate(
  // which passport strat is being used
  'google',
  {
    scope: ['profile', 'email'],
    //Optional
    prompt: 'select_account'
  }
));

//Google oath callback
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }
));

router.get('/logout', function(req, res) {
  req.logout(function() {
    res.redirect('/')
  });

})


module.exports = router;
