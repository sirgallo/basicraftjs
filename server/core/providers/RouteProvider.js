const express = require('express')

class RouteProvider {
  router = express.Router()
  constructor(rootpath) {
    this.rootpath = rootpath
  }
}

module.exports = RouteProvider
