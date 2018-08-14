var fs = require('fs')
var express = require('express')
var Student = require('./student')
//创建路由容器
var router = express.Router()
//把路由容器都挂到router路由容器中
router.get('/students',function(req,res){
    //readFile第二个参数可选读取到的字符按utf-8编码
    /*fs.readFile('./da.json','utf8',function(err,data){
        if(err){
            return res.status(500).send('Server error')//发500 加错误
        }else{
            res.render('index.html',{
                fruits:JSON.parse(data).fruits,
                students:JSON.parse(data).students
            })
        }
    })*/
    Student.find(function(err,jsonArray){
        if(err){
            return res.status(500).send('server err')
        }
        res.render('index.html',{
            fruits:jsonArray.fruits,
            students:jsonArray.students
        })
    })
})
router.get('/students/new',function(req,res){
    res.render('new.html')
})
///获取 post 表单请求
router.post('/students/new',function(req,res){
    /*console.log(req.body)
    fs.readFile('./da.json','utf-8',function(err,data){
        if(err){
            return res.status(500).send('server err')
        }else{
            var data1=JSON.parse(data)
            data1.students.unshift(req.body)
            fs.writeFile('./da.json',data1,function(err){
                if(err){
                    console.log(err)
                }
            })
        }
    })*/
    Student.save(req.body,function(err){
        if(err){
            console.log(err)
        }else{
            res.redirect('/students')
        }
    })
})
router.get('/students/edit',function(req,res){
    //1客户端；列表页中处理连接问题，需要有id参与
    //2获取编辑的学生id
    //3渲染编辑页面
    Student.findById(parseInt(req.query.id),function(err,data){
        if(err){
            return res.status(500).send('server err')
        }else{
            res.render('edit.html',{
                student:data
            })
        }
    })
})
router.post('/students/edit',function(req,res){
    //1获取表单数据 req.body
    //2更新
    Student.update(req.body,function(err){
        if(err){
            return res.status(500).send('server err')
        }
        else{
            res.redirect('/students')
        }
    })
})
router.get('/students/delete',function(req,res){
    /**
     * 1获取要删除的id
     * 2根据id执行删除操作
     * 3根据操作结果发送响应数据
     */
    console.log(req.query.id)
    Student.delete(req.query.id,function(err){
        if(err){
            return res.status(500).send('SERVER ERRor')
        }else{
            res.redirect('/students')
        }
    })
})
module.exports = router








/*module.exports=function(app){

}*/
