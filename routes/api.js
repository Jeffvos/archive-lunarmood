const router = require('express').Router();
const lunar = require('../lunar');

router.route('/moon-today').get((req, res) => {
  moonPhaseToday = lunar.getMoonPhase();
  res.json({ moonphase: moonPhaseToday });
});

router.route('/moon-tomorrow').get((req, res) => {
  moonPhaseTomorrow = lunar.getMoonPhase('tomorrow');
  console.log(moonPhaseTomorrow);
  res.json({ moonphase: moonPhaseTomorrow });
});

module.exports = router;
