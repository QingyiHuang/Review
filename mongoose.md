## 中间件

mongoose里的中间件,有两个, 一个是pre, 一个是post.

- pre: 在指定方法执行之前绑定。 中间件的状态分为 parallel和series.
- post: 相当于事件监听的绑定

这里需要说明一下, 中间件一般仅仅只能限于在几个方法中使用. (但感觉就已经是全部了)

- doc 方法上: init,validate,save,remove;
- model方法上: count,find,findOne,findOneAndRemove,findOneAndUpdate,update

### pre

我们来看一下,pre中间件是如何绑定的.

#### 串行

```
var schema = new Schema(..);
schema.pre('save', function(next) {
  // do stuff
  next(); //执行完毕，执行下一中间件
});
```

#### 并行

```
var schema = new Schema(..);

// 设置第二参数为true，意味这是一个并行中间件
// as the second parameter if you want to use parallel middleware.
schema.pre('save', true, function(next, done) {
  // calling next kicks off the next middleware in parallel
  next();
  setTimeout(done, 100);
});
```

### post

post会在指定事件后触发,就像事件监听器一样，post钩子没什么控制流程，即它是异步的。

```
schema.post('save', function(doc) {
 //在save完成后 触发.
  console.log('%s has been saved', doc._id);
});
```

一门非关系型数据库。 但有时候,我们又需要联合其他的table进行数据查找。 mongoose提供的 population. 用来连接多表数据查询. 一般而言, 我们只要提供某一个collection的_id , 就可以实现完美的联合查询. population 用到的关键字是: ref 用来指明外联的数据库的名字. 一般,我们需要在schema中就定义好.

```
var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  
var personSchema = Schema({
  _id     : Number,
  name    : String,
  age     : Number,
  stories : [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

var storySchema = Schema({
  _creator : { type: Number, ref: 'Person' },
  title    : String,
  fans     : [{ type: Number, ref: 'Person' }]
});

var Story  = mongoose.model('Story', storySchema);
var Person = mongoose.model('Person', personSchema);
```

> Note: ObjectId, Number, String, and Buffer are valid for use as refs.

使用populate query方法进行关联

```
Story
.findOne({ title: 'Once upon a timex.' })
.populate('_creator')
.exec(function (err, story) {
  if (err) return handleError(err);
  console.log('The creator is %s', story._creator.name);
  // prints "The creator is Aaron"
});
```

如果没有指定projection，find()方法返回所有匹配文档的所有字段。

 

复制代码代码如下:

db.inventory.find( { type: 'food' } )

 

这个例子将返回inventory集合中type字段的值为"food"的所有文档，返回的文档包含全部字段。

 

 

返回指定字段和_id字段：

 

一个projection可以明确地指定多个字段。下面的操作中，find()方法返回匹配的所有文档。在结果集中，只有item和qty字段，默认_id字段也是返回的。

 

复制代码代码如下:

db.inventory.find( { type: 'food' }, { item: 1, qty: 1 } )

 

 

仅返回指定字段：

 

可以通过在projection中指定排除_id字段将其从结果中去掉，如下例子所示：

 

复制代码代码如下:

db.inventory.find( { type: 'food' }, { item: 1, qty: 1, _id:0 } )

 

 

返回除排除掉以外的字段：

 

可以使用一个projection排除一个或者一组字段，如下：

 

复制代码代码如下:

db.inventory.find( { type: 'food' }, { type:0 } )

 

这个操作返回所有type字段值为food的文档，在结果中type字段不返回。