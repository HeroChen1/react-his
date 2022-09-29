const path = require('path')
const cracoSassResoucesLoader = require('craco-sass-resources-loader')
module.exports = {
webpack: {
// 配置别名
alias: {
'@': path.resolve(__dirname, 'src')
}
},plugins: [
    {
    plugin: cracoSassResoucesLoader,
    options: {
        resources: path.resolve(__dirname, 'style/variables.scss')
    }
    }
    ]
    }
 //配置文件------此文件在项目根目录中，与package同级   