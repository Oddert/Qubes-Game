const router = require('express').Router()

router.route('/')
  .get((req, res, next) => {
      // console.log(process.env.LOCATION ? process.env.LOCATION : 'https://oddert-mos-matterial-vis.glitch.me')
      res.render('index', {
        game_name: req.query.name ? req.query.name : 'Bloqs',
        brick_single: req.query.object ? req.query.object : 'Bloq',
        brick_multiple: req.query.object ? req.query.object + 's' : 'Bloqs',
        brick_prefix: 'a',
        updates: null,
        location: process.env.LOCATION ? process.env.LOCATION : 'https://oddert-mos-matterial-vis.glitch.me'
      })
    }
  )

router.route('/d3')
  .get((req, res, next) => res.render('d3'))

module.exports = router
