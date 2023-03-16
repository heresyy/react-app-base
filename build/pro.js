const build = require('./base')

module.exports = function buildPro({
  entryDir,
  staticSuffixes,
  title,
  
  staticDir = './dist',
} = {}) {
  return {
    ...build({
      title,
      entryDir,
      staticSuffixes,
      staticDir,
    }),
    mode: 'production',
  }
}