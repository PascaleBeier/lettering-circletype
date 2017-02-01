const webpack = require('webpack');

module.exports = {
    entry: './build.js',
    output: {
        path: './dist',
        filename: 'lettering-circletype.min.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
}