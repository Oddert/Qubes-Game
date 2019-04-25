const router = require('express').Router()

router.route('/placeholder')
  .get((req, res, next) => res.send('Page placeholder, will implement asap'))

module.exports = router
