const path = require('path');
const HtmlWebpackplugin = require('html-webpack-plugin');
const MinicssExtractPl = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {


    entry: "./src/index.js",
    output: {
        path: path.join(__dirname,'dist'),
        filename:'[name].output.js',
        clean: true,
       assetModuleFilename: 'asset/[name][ext]'
   },
   optimization: {
    minimize: true, 
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  }, 
   module: {
    rules: [
        {
            test: /\.js|.jsx$/,
            exclude: '/node_modules/',
            use: ["babel-loader"]
        },
        {
          test: /\.(sa|sc|c)ss$/,
          exclude: '/node_modules/',
          use: [
            //"style-loader",
            MinicssExtractPl.loader,
            "css-loader",
            "postcss-loader"
           ]
        },
          {
              test: /\.(png|PNG|webp|svg|jpg|jpeg|gif)$/i,
              type: 'asset/resource',
            },
    
    ]
},
devServer: {
  historyApiFallback: true,
},
performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
}, 
 plugins:[

    new HtmlWebpackplugin({
        template: './public/index.html',
        filename: 'index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: "public", to: "asset" }, 
      ],
    }),
    new MinicssExtractPl({filename: '[name].[fullhash].css'}),
]


}