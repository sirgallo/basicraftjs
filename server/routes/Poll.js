const express = require('express')
const router = express.Router()

class Poll {
  constructor() {
    router.get('/', this.poll)
  }

  poll = (req, res, next) => {
    res
      .status(200)
      .send({ alive: 'okay' })
  }
}

new Poll()

module.exports = { path: '/poll', router: router }
