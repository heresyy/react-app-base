# React Framework
+ 打包 webpack
+ 支持 coffeescript
+ 支持 stylus

##### peerDependencies
``` bash
npm install @ppzp/utils react react-dom react-router-dom utils.rc
```

##### devDependencies
``` bash
npm install -D coffee-loader coffeescript css-loader html-webpack-plugin style-loader stylus stylus-loader webpack webpack-cli webpack-dev-server
```

##### scripts
``` json
{
  "dev": "webpack serve --open --config ./build/dev",
  "pro": "webpack --config ./build/pro"
}
```

##### 各工具
+ [coffeescript](https://coffeescript.org/)
+ [stylus](https://stylus-lang.com/)
