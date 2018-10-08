```
function A() {
  // async get dataA
  function B(dataA) {
    // async get dataB
    function C(dataB) {
    }
  }
}

Promise(A).then(B).then(C).catch(err => console.log(err))

co(function *() {
  var dataA = yield A()
  var dataB = yield B(dataA)
  var dataC = yield C(dataB)
})

async () => {
  const dataA = await A()
  const dataB = await B(dataA)
  const dataC = await C(dataB)
}
```



bluebird bable