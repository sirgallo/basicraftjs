const Route = require('../core/providers/Route')

class Poll extends Route {
  init() {
    this.router.get('/', (res, req, next) => {
      res.statusCode(200).send({ alive: 'okay' })
    })
  }
}

module.exports = Poll