const Server = require('./Server')

const ServerState = require('../types/IServerState')
const Log = require('../types/ILog')

const randTimeout = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}

class RaftServer extends Server {
  timeout = randTimeout(50, 100)
  
  constructor(routes, isCluster) {
    super(routes, isCluster)
    this.serverState = ServerState.follower
    this.log = Log
  }
}

module.exports = RaftServer
