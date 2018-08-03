/**
 * 第一个节点和第一个元素的获取代码在IE8中不兼容
 * 最后一个节点和最后一个元素获取代码在IE8中可能不兼容
 * 前一个节点和前一个元素的获取的代码在ie8中可能不支持
 */
//firstChild 获取第一个子节点 但ie8中获取的一个子元素
//firstElementChild ie8undefined，但谷歌 火狐是子元素
function getFirstElementChild(element){
    //if(typeof(element.firstElementChild!="undefined"))
    if(element.firstElementChild){
        return element.firstElementChild;
    }else{
        //return element.firstChild;要考虑其他浏览器
        var node =element.firstChild;//第一个节点
        while(node&&node.nodeType!=1){
            node=node.nextSibling;
        }
        return node;
    }
}
//获取最后一个子元素
function getLastElementChild(element){
    //if(typeof(element.lastElementChild!="undefined"))
    if(element.LastElementChild){
        return element.lastElementChild;
    }else{
        //return element.lastChild;要考虑其他浏览器
        var node =element.lastChild;//第一个节点
        while(node&&node.nodeType!=1){
            node=node.previousSibling;
        }
        return node;
    }
}