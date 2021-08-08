const Service = require('./core/providers/StartService.js')
const SrvTypes = require('./core/types/IServerTypes')

const PollRoute = require('./srv/Poll')

const pollroute = new PollRoute('/poll')
pollroute.init()

const service = new Service([pollroute], SrvTypes.single)
//service.start()
console.log(service.routers[0].router)
