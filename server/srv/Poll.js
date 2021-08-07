const Route = require('../core/providers/Route')

class Poll extends Route {
  initialize(path) {
    this.router.get(path, (res, req, next) => {
      res.statusCode(200).send({ alive: 'okay' })
    })
  }
}

module.exports = Poll