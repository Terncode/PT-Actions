var path = require('path');

module.exports = {
    mode: 'production',
    entry: './example/index.ts',
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        rules: [{
            test: /.ts$/,
            loader: 'ts-loader'
        }]
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'example')
    }
};