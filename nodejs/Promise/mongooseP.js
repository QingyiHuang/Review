/*User.find(function(err,ret){
    if(err){
        console.log(err)
    }else{
        console.log(ret)
    }
})*/

User.find()
    .then(function(data){
        console.log(data)
    })