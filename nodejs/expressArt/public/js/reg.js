(function(){
    var input=document.getElementById("input_name")
    var reg=/^[a-zA-Z0-9_.-]+[@]+[0-9a-zA-Z_-]+([.][a-zA-Z]+){1,2}$/;
    input.onblur=function(){
        if(reg.test(input.value)){
            input.style.backgroundColor="green";
        }else{
            this.style.backgroundColor="deeppink";
        }
    }
}());