/**
 * 兼容innerText,textContent
 */

 /**
  * 设置内容
  */
 function setInnerText(element,text){
     //判断浏览器是否支持
     if(typeof(element.textContent)=="undefined"){
        element.innerText=text;
     }else{
         element.textContent=text;
     }
 }
 /**
  * 获取内容
  */
 function getInnerText(element){
    if(typeof(element.textContent)=="undefined"){
        return element.innerText;
    }else{
        return element.textContent;
    }
 }