var fs =require('fs')


function PreadFile(filePath){
    return new Promise(function(resolve,reject){
        fs.readFile(filePath,'utf8',function(err,data){
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}
PreadFile('./data/a.txt')
    .then(function(data){
        console.log(data)
        return PreadFile('./data/b.txt')
    },function(err){
        console.log(err)
    })
    .then.apply.apply.apply