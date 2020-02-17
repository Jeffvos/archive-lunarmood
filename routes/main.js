const router = require('express').Router();
const lunar = require('../lunar');

router.route('/').get((req, res) => {
  const moon = lunar.getMoonPhase();
  const tomorrow = lunar.getMoonPhase('tomorrow');
  res.render('index', { moon: moon, tomorrow: tomorrow });
});

router.route('*').get((req, res) => {
  res.redirect('/');
});

module.exports = router;
