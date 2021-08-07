const healthcheckroutes = require('./srv/HealthCheckRoutes')
const Service = require('./core/providers/StartService.js')

console.log(healthcheckroutes[0])
const SrvTypes = require('./core/types/IServerTypes')

const service = new Service(healthcheckroutes, SrvTypes.raft)
service.start()
