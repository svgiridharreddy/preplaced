const arr = [1,2,5,62,23,10,9,11]

const result = arr.filter((item) => item > 10)
console.log(result);


 // polyfill

// why it is not working when arrow function is used below. 


Array.prototype.myFilter = function(callback){
  try {
    console.log(this);
    const arr = this;
    const len = arr.length;
    if(len <= 0 || typeof(callback) !== "function") return this;
    const newArr = new Array(len)
    for(let i=0;i<len; i++){ 
      if(callback(arr[i],i,arr)){
        newArr.push(arr[i]);
      }
    }
    return newArr;
  } catch (error) {
    console.log(error.message)
    throw new Error(error.message)
  }
  
}

const result1 = arr.myFilter(item => item > 10)
console.log(result1);