const Server = require('./Server')
const Raft = require('./RaftServer')
const SrvTypes = require('../types/IServerTypes')

class StartService {
  server;
  routers = []
  constructor(routes, srvtype) {
    this.buildRoutes(routes)
    this.srvtype = srvtype
  }

  buildRoutes(routes) {
    for(let route of routes) {
      this.routers.push({ path: route.rootpath, router: route.router })
    }
  }

  start() {
    if (this.srvtype == SrvTypes.server)
      this.server = new Server(this.routers, true)
    else if (this.srvtype == SrvTypes.raft)
      this.server = new Raft(this.routers, true)
    else if (this.srvtype == SrvTypes.single)
      this.server = new Server(this.routers, false)
    else
      throw new Error('Incorrect Server Type Specified')
    this.server.run()
  }
}

module.exports = StartService
