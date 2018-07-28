/*默认参数*/
function hello(txt){    //默认参数es5中的默认参数方法
    txt = txt || 'hello es5';
    return txt;
};
function hello2(txt='hello es6'){//es5中的默认参数方法
                         
};
/*字符串模版*/
var name ="hello es6";
var name2=`${name}`;