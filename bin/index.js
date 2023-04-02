#!/usr/bin/env node

const FS = require('fs')
const Path = require('path')

const tmpls = ['bear', 'ppz', 'sth2eat']
const [_0, _1, dir, _templateName] = process.argv
const templateName = _templateName ?? 'bear'
console.log(`正在创建以 ${templateName} 为模板的 React APP
可选的模板有: ${tmpls.join(', ')}`)

if(!dir)
  logErr('须指定项目目录名，如 npm create @ppzp/react-app my-app')
if(tmpls.indexOf(templateName) == -1)
  logErr('不存在的模板: ' + templateName)

try {
  FS.cpSync(Path.join(__dirname, '../template', templateName), dir, {
    dereference: true,
    errorOnExist: true,
    force: false,
    recursive: true
  })
} catch(err) {
  if(err.code == 'ERR_FS_CP_EEXIST')
    logErr(`目录已存在: "${dir}"`)
  else
    throw err
}

logSuc('创建成功 ' + dir)

function logErr(msg) {
  console.log(`\x1B[31merror: ${msg}\x1B[0m`)
  process.exit()
}
function logSuc(msg) {
  console.log(`\x1B[32m${msg}\x1B[0m`)
}