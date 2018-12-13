const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    entry: './src/app/index.js',
    output:{
        path: path.join(__dirname,'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port:3000
    },
    plugins:[        
        new htmlWebpackPlugin({
        template:'./src/index.html'
        })
    ]
}