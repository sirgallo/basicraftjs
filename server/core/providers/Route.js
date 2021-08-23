const express = require('express')

class Route {
  router = express.Router()
  constructor(rootpath) {
    this.rootpath = rootpath
  }
}

module.exports = Route
