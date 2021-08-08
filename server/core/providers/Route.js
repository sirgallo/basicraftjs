const express = require ('express')

class Route { 
  router = express.Router()
  constructor(rootpath) {
    this.rootpath = rootpath
  }

  init() {}
}

module.exports = Route
