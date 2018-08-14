function Pget(Path){
    return new Promise(function(resolve,reject){
        var xhr = new XMLHttpRequest()
        xhr.onload = function(){
            resolve(JSON.parse(xhr.responseText))
        }
        xhr.onerror = function(err){
            reject(err)
        }
        xhr.get("get",Path,true)
        xhr.send()
    })
}
/*Pget('http://localhost:3000/data/a.txt')
    .then(function(data){
        console.log(data)
        return Pget('WWWWWWWWWWWWWWW')
    },function(err){
        console.log(err)
    })
    .then(Function.apply........)*/