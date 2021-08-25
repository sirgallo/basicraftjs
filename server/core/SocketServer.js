const zmq = require('zeromq')
const os = require('os')

const Server = require('./Server')
const socktypes = require('./types/ISocketTypes')
const connprot = require('./types/IConnProtocol')

const localhost = '127.0.0.1'

class SocketServer extends Server {
  socktype = socktypes.sub
  connprotocol = connprot.tcp
  host = os.hostname()

  sock
  
  constructor(routes, isCluster, topic, socktype) {
    super(routes, isCluster)
    this.topic = topic
    this.socktype = socktype
  }

  setSockType(socktype) {
    if (socktype in socktypes) {
      this.socktype = socktype
      this.setupSocket()
    }
  }

  setConnProtocol(prot) {
    if (prot in connprot) {
      this.connprotocol = prot
      this.setupSocket()
    }
  }

  setupSocket() {
    this.sock = zmq.socket(socktype)
    if (socktype == socktypes.pub) {
      sock.bindSync(`${this.connprotocol}://${localhost}`)

    } else {
      sock.connect(`${this.connprotocol}://${localhost}`)
      sock.subscribe(this.topic)
      sock.on('message', (topic, message) => {
        console.log({ topic: topic, message: message })
      })
    }
  }

  publisher() {

  }

  subscriber() {

  }
}

module.exports = SocketServer
