const Server = require('./RaftServer')

const heartBeatRoute = require('./srv/Heartbeat')

const routes = [
  { path: '/heartbeat', router: heartBeatRoute }
]

const server = new Server(routes, true)
server.run()
