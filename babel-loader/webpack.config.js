const path=require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname,'index.js'),
  output: {
  	path:path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },
  module:{
  	rules:[
  	//aqui van los loaders
  		{
  			// test: que tipo de archivo quiero reconocer
  			// use: que loader se va encargar del archivo
  			test: /.\.css$/,
  			use: ExtractTextPlugin.extract({
          // ['style-loader','css-loader']
            use:"css-loader"
      }),
  		}

  	]

  },
  plugins:[
    //aqui van los plugins
    new ExtractTextPlugin("css/[name].css")
  ]
}