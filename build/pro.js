const build = require('./base')

module.exports = function buildPro({
  entryDir,
  staticSuffixes,
  staticDir = './dist',
}) {
  return {
    ...build({
      entryDir,
      staticSuffixes,
      staticDir,
    }),
    mode: 'production',
  }
}