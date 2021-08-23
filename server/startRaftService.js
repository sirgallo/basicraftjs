const Service = require('./core/providers/StartService.js')
const SrvTypes = require('./core/types/IServerTypes')

const PollRoute = require('./routes/Poll')

const routes = [
  { path: PollRoute.path, router: PollRoute.router }
]

const service = new Service(routes, SrvTypes.server)
service.start()
