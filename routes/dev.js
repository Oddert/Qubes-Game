const router = require('express').Router()

router.route('/placeholder')
    .get((req, res) => res.send('Page placeholder, will implement asap'))

module.exports = router
