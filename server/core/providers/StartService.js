const Server = require('./Server')
const Poll = require('./Poll')
const Route = require('./Route')
const Raft = require('./RaftServer')
const SrvTypes = require('../types/IServerTypes')

class StartService {
  server = ''
  constructor(routes, type) {
    this.buildPolls(polls)
    this.buildRoutes(routes)
    this.type = type
  }

  buildRoutes(routes) {
    for(let route of routes) {
      console.log(route)
      let res = new Route(route.path)
      poll.poll(route.routes.route)
      this.routes.push({ path: poll.path, router: poll.router })
    }
  }

  start() {
    if (this.type == SrvTypes.server)
      this.server = new Server(routes, true)
    else if (this.type == SrvTypes.raft)
      this.server = new Raft(routes, true)
    else if (this.type == SrvTypes.single)
      this.server = new Server(routes, false)
    else
      throw new Error('Incorrect Server Type Specified')
    this.server.run()
  }
}

module.exports = StartService
