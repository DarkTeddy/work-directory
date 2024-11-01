function Plugin(options) { }

Plugin.prototype.apply = function (compiler) {
    // 所有文件资源经过不同的loader处理后触发这个事件
    compiler.hooks('emit', function (compilation, callback) {
        // 获取打包后的js文件名
        const filename = compiler.options.output.filename
        // 生成一个html文件，并引入打包后的js文件
        const html = `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <script src="${filename}"></script>
            </head>
            <body>
                
            </body>
            </html>`

        // 所有处理后的资源都放在comilation.assets中
        // 添加一个index.html文件
        compilation.assets['myIndex.html'] = {
            source: function(){
                return html;
            },
            size: function(){
                return html.length;
            },
        };
        // 功能完成后调用webpack提供的回调
        callback();
    })
}

module.exports = Plugin