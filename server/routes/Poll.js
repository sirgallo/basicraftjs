const Route = require('../core/providers/Route')

class Poll extends Route {
  constructor(rootpath) {
    super(rootpath)
    this.router.get('/', this.poll)
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
  router: poll.router 
}

module.exports = pollroute
