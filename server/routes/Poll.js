const Route = require('../core/providers/Route')

const express = require('express')
const router = express.Router()

class Poll extends Route {
  constructor(rootpath) {
    super(rootpath)
    router.get('/', this.poll)
  }

  //  does not need to be asynchronous
  poll(req, res, next){
    res
      .status(200)
      .send({ alive: 'okay' })
  }
}

const poll = new Poll('/poll')
const pollroute = { 
  path: poll.rootpath,
  router: router 
}

module.exports = pollroute
