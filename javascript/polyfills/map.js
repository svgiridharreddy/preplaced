const arr = [1,2,5,62,23,10,9,11] 
const result = arr.map(item => item * 2);

// polyfill

// why it is not working when arrow function is used below. 

Array.prototype.myMap = function(callback){
  try {
    console.log("this is: ", this);
    const arr = this;
    const len = arr.length;
    const newArr = new Array(len);
    for(let i=0; i < len; i++){
      newArr.push(callback(arr[i], i, arr))
    }
    return newArr;
  } catch (error) {
      console.log(error.message)
      throw new Error(error.message)
  }
}

const result1 = arr.myMap((item,index,arr) => item*10)
console.log(result1)
