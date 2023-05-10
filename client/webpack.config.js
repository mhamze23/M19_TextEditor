const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// Webpack configuration for a PWA with a service worker and a manifest file
// Includes CSS loaders and Babel transpiler
module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js',
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      assetModuleFilename: 'assets/icons/[name][hash][ext]',
    },
    plugins: [
      // Generate an HTML file based on a template
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'JATE',
      }),
      // Inject the service worker to the build output
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'src-sw.js',
      }),
      // Generate a PWA manifest file
      new WebpackPwaManifest({
        name: 'JATE',
        short_name: 'JATE',
        description: 'JATE: Just Another Text Editor',
        background_color: '#225ca3',
        theme_color: '#225ca3',
        start_url: '/',
        publicPath: '/',
        fingerprints: false,
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
        ],
      }),
    ],
    module: {
      rules: [
        // Process CSS files with style-loader and css-loader
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        // Transpile JavaScript files with Babel
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/transform-runtime',
              ],
            },
          },
        },
      ],
    },
  };
};
