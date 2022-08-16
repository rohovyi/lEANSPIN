// webpack.config.js
import process from 'process';

const isProd = env.NODE_ENV === 'production';

export default {
    mode: isProd ? 'production' : 'development',
    context: process.cwd(),
    entry: {
        // Service worker entry point:
        sw: './src/sw.js',
        // Application entry point:
        app: './src/index.js'
    },
    output: {
        filename: ({ runtime }) => {
            // Check if the current filename is for the service worker:
            if (runtime === 'sw') {
                // Output a service worker in the root of the dist directory
                // Also, ensure the output file name doesn't have a hash in it
                return '[name].js';
            }

            // Otherwise, output files as normal
            return 'js/[name].[contenthash:8].js';
        },
        path: './dist',
        publicPath: '/',
        clean: true
    }
};