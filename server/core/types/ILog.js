let IEntry = {
  index: 0,
  term: 0,
  command: {}
}

let ILog = {
  indices: [IEntry.index],
  terms: [IEntry.term],
  commands: [IEntry.command]
}

module.exports = { IEntry, ILog }
