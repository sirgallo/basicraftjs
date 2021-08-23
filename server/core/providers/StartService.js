const Server = require('./Server')
const Raft = require('./RaftServer')
const SrvTypes = require('../types/IServerTypes')

class StartService {
  server;
  routers = []
  constructor(routers, srvtype) {
    this.routers = routers
    this.srvtype = srvtype
  }

  start() {
    try {
      switch(this.srvtype) {
        case SrvTypes.server:
          this.server = new Server(this.routers, true)
          break
        case SrvTypes.raft:
          this.server = new Raft(this.routers, true)
          break
        case SrvTypes.single:
          this.server = new Server(this.routers, false)
          break
        default:
          throw new Error('Incorrect Server Type Specified')
      }
      this.server.run()
    } catch (err) {
      console.log(err)
      throw new Error(err)
    }
  }
}

module.exports = StartService
