const data = {
  123: {
    name: "Alice",
    id: 123,
    dob: "Dec"

  },
  456: {
    name: "Bob",
    id: 4567,
    dob: "Nov",
    per : "acb"
  }
};

const data2 = {
  456: {
    name: "Bob1",
    id: 456,
    dob: "Nov",
    eth: "hi"
  },
  135: {
    name: "Eve",
    id: 135,
    dob: "Jun"
  }
};
function usingSpread(data,data2){
  const result = {}
  for(key in data){
    result[key] = {...result[key], ...data[key]}
  }

  for(key in data2){
    result[key] = {...result[key], ...data2[key]}
  }
  console.log(result);
}

// console.log(result);

// my output with spread operator: ( incorrect output) how to 
/* 
  {
    '123': { name: 'Alice', id: 123, dob: 'Dec' },
    '135': { name: 'Eve', id: 135, dob: 'Jun' },
    '456': { name: 'Bob1', id: 456, dob: 'Nov', eth: 'hi' }
  } 
*/
// using loop
function combineObjects(obj1,obj2){
  const result = {...obj1};

  Object.keys(obj2).map(key => {
    const childObj = obj2[key]
    if(result.hasOwnProperty(key)){
      Object.keys(childObj).map(childKey => {
        result[key][childKey] = obj2[key][childKey]
      })
    }else{
      result[key] = childObj;
    }
  })
  console.log(result);
  return result;

}
// combineObjects(data,data2)

usingSpread(data,data2);
// expected output 
// output = {
//     456: {
//     name: "Bob1",
//     id: 456,
//     dob: "Nov",
//     per : "acb",
//     eth: "hi"
//   },
//     135: {
//     name: "Eve",
//     id: 135,
//     dob: "Jun"
//   }
// } 