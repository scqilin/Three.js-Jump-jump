const path = require('path')
const HtmlWebpalckPlugin = require('html-webpack-plugin')

module.exports = {
    entry:{
    'index':'./src/index.ts',
    // 'main':'./src/main.ts'  //多入口配置方法   
    },
    output:{
        path:path.resolve(__dirname,'public'),
        filename:'[name].js'
    },
    devtool:'eval-source-map',//开发环境eval-source-map 生产环境 source-map
    devServer:{
        contentBase:'./public',
        open:true,
        port:9011
    },
    plugins:[
        new HtmlWebpalckPlugin({
            'chunks':['index'],
            filename: 'index.html',
            template:'./src/index.html'            
        }),
        // new HtmlWebpalckPlugin({ //多入口配置方法  
        //     filename: 'main.html',
        //     'chunks':['main']           
        // })
    ],    
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                use:'ts-loader',
                exclude:/node_modules/
            },           
        ]
    },
    resolve:{
        extensions:['.tsx','.ts','.js']
    }, 

}