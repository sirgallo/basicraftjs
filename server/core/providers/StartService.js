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
      if (this.srvtype == SrvTypes.server)
        this.server = new Server(this.routers, true)
      else if (this.srvtype == SrvTypes.raft)
        this.server = new Raft(this.routers, true)
      else if (this.srvtype == SrvTypes.single)
        this.server = new Server(this.routers, false)
      else
        throw new Error('Incorrect Server Type Specified')
      this.server.run()
    } catch (err) {
      console.log(err)
      throw new Error(err)
    }
  }
}

module.exports = StartService
