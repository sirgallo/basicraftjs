const Server = require('./core/providers/Server')

const ServerState = require('./core/types/IServerState')

class RaftServer extends Server {
  constructor(routes, isCluster) {
    super(routes, isCluster)
    this.serverState = ServerState.candidate
  }
}

module.exports = RaftServer
