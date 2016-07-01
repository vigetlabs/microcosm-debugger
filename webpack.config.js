var HappyPack = require('happypack')
var WebPack   = require('webpack')

module.exports = {

  devtool: 'inline-sourcemap',

  entry: {
    'microcosm-debugger': './lib/index.jsx'
  },

  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.scss']
  },

  externals: {
    'react': 'react',
    'react-dom': 'react-dom'
  },

  plugins: [
    new HappyPack({
      id: 'app'
    })
  ],

  module: {
    loaders: [
      {
        test: /\.css$/,
        include: /node_modules/,
        loader: "style!css",
        happy: { id: 'app' }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[local]-[hash:base64:5]',
          'resolve-url',
          'sass?sourceMap'
        ],
        happy: { id: 'app' }
      },
      {
        test: /\.jsx*$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          "presets": [ "es2015", "react" ]
        },
        happy: { id: 'app' }
      }
    ]
  }
}
