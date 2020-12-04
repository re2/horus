#!/node
var fs = require('fs');
var path = require('path');
var current_path = fs.realpathSync('.'); //获取当前路径 

function replaceStr(file){
    let extname = path.extname(file);
    let filename = path.basename(file);
    if (extname !== '.jpg' && extname !== '.png' && extname !== '.gif' && filename !== 'to_blackmatrix7.js' && filename !== 'to_codetracer.js'){
        fs.readFile(file, {encoding:'utf-8'}, function(err, data){
            data = data.replace(/https?:\/\/raw\.githubusercontent\.com\/codetracer\/prophet\/master/g, 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master');
            data = data.replace(/https?:\/\/github\.com\/codetracer\/prophet\/tree\/master\//g, 'https://github.com/blackmatrix7/ios_rule_script/tree/master/');
            data = data.replace(/https?:\/\/github\.com\/codetracer\/prophet\/blob\/master\//g, 'https://github.com/blackmatrix7/ios_rule_script/blob/master/');
            data = data.replace(/codetracer/g, 'blackmatrix7');
            data = data.replace(/prophet/g, 'ios_rule_script');
            data = data.replace(/idreamtalk/g, 'blackmatrix7');
            data = data.replace(/dreamboat/g, 'ios_rule_script');
            fs.writeFile(file, data, function(err){
                if(err){
                    console.log(file + ' error!');
                }else{
                    console.log(file + ' ok!');
                }
            });
        })
    }
}

//获取当前文件夹内所有指定格式的文件的绝对路径并缓存起来
function walk(path){  
    var dirList = fs.readdirSync(path);
    dirList.forEach(function(item){
        if (item.indexOf('.') != 0){
            if(fs.statSync(path + '/' + item).isDirectory()){
                walk(path + '/' + item);
            }
            else{
                replaceStr(path + '/' + item)
            }
        }
    });
}

walk(current_path);
