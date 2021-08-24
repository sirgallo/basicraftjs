const Route = require('../core/providers/RouteProvider')
const IRoute = require('../core/types/IRoute')

class Poll extends Route {
  constructor(rootpath) {
    super(rootpath)
    this.router.get('/', this.poll)
  }

  //  does not need to be asynchronous
  poll(req, res, next) {
    res
      .status(200)
      .send({ alive: 'okay' })
  }
}

const poll = new Poll('/poll')

module.exports = poll
