#!/usr/bin/env node

const FS = require('fs')
const Path = require('path')

const [_0, _1, dir, _templateName] = process.argv
const templateName = _templateName ?? 'bear'
console.log(`正在创建以 ${templateName} 为模板的 React APP`)

if(['bear', 'ppz', 'sth2eat'].indexOf(templateName) == -1) {
  console.log('不存在的模板: ' + templateName)
  process.exit()
}

try {
  FS.cpSync(Path.join(__dirname, '../template', templateName), dir, {
    errorOnExist: true,
    force: false,
    recursive: true
  })
} catch(err) {
  if(err.code == 'ERR_FS_CP_EEXIST')
    console.log(`目录已存在: "${dir}"`)
  else
    throw err
}

console.log('创建成功')