const router = require('express').Router()

router.route('/')
  .get((req, res, next) => res.render('index', { game_name: 'Qubes', brick_single: 'Qube', brick_multiple: 'Qubes', brick_prefix: 'a' }))

module.exports = router
