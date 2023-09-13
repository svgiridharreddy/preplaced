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
const result = {...data, ...data2}
// console.log(result);

// my output with spread operator: ( in correct output) 
/* 
  {
    '123': { name: 'Alice', id: 123, dob: 'Dec' },
    '135': { name: 'Eve', id: 135, dob: 'Jun' },
    '456': { name: 'Bob1', id: 456, dob: 'Nov', eth: 'hi' }
  } 
*/

function combineObjects(obj1,obj2){
  const result = {};
  Object.keys(obj1).map(key => {
    const childObj = obj1[key];
    result[key] = childObj
    Object.keys(childObj).map(childKey => {
      // console.log(obj1[key]);
      result[key][childKey] = obj1[key][childKey]
    })
  })

  Object.keys(obj2).map(key => {
    const childObj = obj2[key]
    result[key] = childObj;
    Object.keys(childObj).map(childKey => {
      result[key][childKey] = obj2[key][childKey]
    })
  } )
  console.log(result);
  return result;

}
combineObjects(data,data2)


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