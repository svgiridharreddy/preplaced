const arr = [1,2,5,62,23,10,9,11] 
const result = arr.find(item => item > 20);

Array.prototype.myFind = function(callback){
  if(this === null || this === "undefined" || !Array.isArray(this)) return;
  const arr = this;
  const len = arr.length
  if(len <= 0 || typeof(callback) !== "function") return undefined;
  for(let i=0;i<len;i++){
    if(callback(arr[i],i,arr)){
      return arr[i];
    }
  }
  return undefined;
}

const employess = [
    {name: "Paul", job_title: "Software Engineer"},
    {name: "Peter", job_title: "Web Developer"},
    {name: "Harald", job_title: "Screen Designer"},
]
const result1 = employess.myFind(data => data.job_title === "Software Engineer")
console.log(result1);