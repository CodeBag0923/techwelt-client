const path = require('path')

module.exports = {
    reactScriptsVersion: 'react-scripts',
    webpack: {
        configure: (webpackConfig) => {
            webpackConfig.module.rules.push({
              test: /\.worker\.js$/,
              use: { loader: 'worker-loader' }
            });
            
            return webpackConfig;
        },
        alias: {
            '@src': path.resolve(__dirname, 'src'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@store': path.resolve(__dirname, 'src/store'),
        }
    },
    env: {
        MAPBOX_ACCESS_TOKEN: process.env.REACT_APP_MAPBOX_TOKEN
    }
}
