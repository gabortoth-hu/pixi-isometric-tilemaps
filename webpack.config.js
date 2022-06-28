const path    = require('path');
const webpack = require('webpack');

module.exports = [
  {
    entry: path.join(__dirname, 'src', 'test.ts'),
    output: {
      filename: 'test.js'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'] 
    },
    module: {
      rules: [ 
        {
          test: /\.tsx?$/,
          loader: 'ts-loader'
        },
        
      ]
    }
  },
  {
    entry: path.join(__dirname, 'src', 'test.ts'),
    output: {
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'] 
    },
    module: {
      rules: [ 
        { 
          test: /\.tsx?$/, 
          loader: 'ts-loader',
          options: {
            configFile: 'test.tsconfig.json'
          },
        }
      ]
    },
    plugins: [
//      new webpack.optimize.UglifyJsPlugin(),
//      new webpack.optimize.OccurrenceOrderPlugin(),
    ]
  },
  {
    entry: path.join(__dirname, 'src', 'build.ts'),
    target: 'node',
    output: {
      filename: '[name].js',
      path: __dirname +'/dist',
      libraryTarget: 'commonjs2',
    },
    externals: [ 'pixi.js', 'fpsmeter' ],
    resolve: {
      extensions: ['.ts', '.tsx', '.js'] 
    },
    node: {
      __dirname: false,
      __filename: false,
    },    
    module: {
      rules: [ 
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
        }
      ]
    }
  }  
]