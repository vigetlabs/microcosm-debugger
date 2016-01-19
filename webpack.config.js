module.exports = {

  entry: {
    'microcosm-debugger': './lib/index.jsx'
  },

  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  externals: {
    'react': 'react',
    'react-dom': 'react-dom'
  },

  module: {
    loaders: [{
      test    : /\.jsx*$/,
      exclude : /node_modules/,
      loader  : 'babel',
      query   : {
        "presets" : [ "es2015", "react" ]
      }
    }]
  }
}
