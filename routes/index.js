const router = require('express').Router()

router.route('/')
  .get((req, res, next) =>
    res.render('index', {
      game_name: req.query.name ? req.query.name : 'Qubes',
      brick_single: req.query.object ? req.query.object : 'Qube',
      brick_multiple: req.query.object ? req.query.object + 's' : 'Qubes',
      brick_prefix: 'a',
      updates: null
    })
  )

router.route('/d3')
  .get((req, res, next) => res.render('d3'))

module.exports = router
