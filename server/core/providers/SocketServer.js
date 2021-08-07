const zmq = require('zeromq')
const os = require('os')

const Server = require('./Server')
const socktypes = require('../types/ISocketTypes')
const connprot = require('../types/IConnProtocol')

const localhost = '127.0.0.1'

class SocketServer extends Server {
  socktype = socktypes.sub
  connprotocol = connprot.tcp
  host = os.hostname()
  
  constructor(topic, socktype) {
    this.topic = topic
    this.socktype = socktype
  }
  setupSocket() {
    sock = zmq.socket(socktype)
    if (socktype == socktypes.pub) {
      sock.bindSync(`${this.connprotocol}://${localhost}`)
      
    } else {
      sock.connect(`${this.connprotocol}://`)
      sock.subscribe(this.topic)
      sock.on('message', (topic, message) => {
        console.log({ topic: topic, message: message })

      })
    }
  }
}