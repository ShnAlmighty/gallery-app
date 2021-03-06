const path = require('path');

module.exports = {
    mode:'production',
    entry:'./src/app.js',
    output:{
        path:path.join(__dirname, 'public'),
        filename:'bundle.js'
    },
    target:'web',
    module:{
        rules:[{
            loader:'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },{
            test: /\.scss$/,
             use: [
                 'style-loader',
                 'css-loader',
                 'sass-loader'             ]           
        },
        {
            test: /\.(png|jpg)$/,
            use:[
                'file-loader'
            ]        
        }
    ]
    },
    devtool:'eval-cheap-module-source-map',
    devServer:{
        contentBase: path.join(__dirname, 'public')
    }
};