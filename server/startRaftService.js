const Service = require('./core/providers/StartServiceProvider.js')
const SrvTypes = require('./core/types/IServerTypes')

const PollRoute = require('./routes/Poll')

const routes = [
  PollRoute
]

const service = new Service(routes, SrvTypes.server)
service.start()
