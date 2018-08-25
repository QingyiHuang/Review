/**
 * 
 * @param {*} url 
 * @param {*} params 
 * @param {*} callback 
 * jsonp ('http://www.baidu.api.com',{id:10},callback)
 */
function jsonp(url,params,callback){
    var funcName = 'jsonp_'+Date.now()+
    Math.random().toString.substr(2,5)

    if(typeof params ==='object'){
        var tempArr =[]
        for(var key in params){
            var value = params[key]
            tempArr.push(key+'='+value)
        }
        //tempArr =>['key1=value1','key2=value2']
        params = tempArr.join('&')
    }

    var script = document.createElement('script')
    scritp.src = url+'?'+params+'&callback='+funcName
    document.body.appendChild(script)

    window[funcName] = function(params){
        callback(params)
    }
}
