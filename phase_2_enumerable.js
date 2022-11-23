
Array.prototype.myEach = function (callback){
  for (i=0; i<this.length; i++){
    callback(this[i]);
  }
}

Array.prototype.myMap = function (callback){
  let res = [];
  
  this.myEach((el)=>{
    res.push(callback(el));
  })
  return res;
}
arr = [1,2,2,3,4];

// console.log(arr.myMap((num)=>(num*2)));
// // arr.myEach((num)=>{console.log(num*2)})
// console.log(arr.myEach((num)=>{num*2}));

Array.prototype.myReduce = function (func, initialVal){
  let copy = [...this];

  if (initialVal===undefined){
    initialVal = copy.shift();
  }

  // let acc = copy.shift();
  copy.myEach((elem)=>{
    initialVal = func(initialVal, elem);
  })
  return initialVal;
}


// without initialValue
let a = [1, 2, 3];
console.log(a.myReduce(function(acc, el) {
  return acc + el;
})); // => 6

// // with initialValue
console.log([1, 2, 3].myReduce(function(acc, el) {
  return acc + el;
}, 25)
);
 // => 31