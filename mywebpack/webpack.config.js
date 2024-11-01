const path = require('path')
const Plugin = require('./src/my-plugin.js')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/test.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: path.resolve('./src/sync-loader.js'),
                    },
                ]
            }
        ],
        plugins: [
            new Plugin()
        ]
    },
}
