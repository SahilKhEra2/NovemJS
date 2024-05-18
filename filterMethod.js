// Fileter Method
/*
1.  Filter method is used to return a newArray that passes the specific condition, that we provide.
2. The call back function should return true, to keep the element or false to fileter it out
3. immutable
*/

// example 1
// let arr2=[45,65,true,0,null,undefined,false,-45];
// let truthValues=arr2.filter(Boolean); // it will extract only true values
// console.log(truthValues);

// example 2
// let numbers=[12,41,65,85,95];
// let newArr=numbers.filter((ele,index,arr)=>{ 
//   // console.log(index,arr)
//     return ele>50; // will return value according to this condition
// });
// console.log(newArr);

// example 3

// let studentList=["Abhimany,sahil,Tamanna","jusleen","dev"];
// function check(name){
//     for(let i=0;i<name.length;i++){
//         if(name[i]==="a"){
//             return true
//         }
//     }
//     return false;
// }
// let result=studentList.filter(check)
// console.log(result)


// function checkLetters(name){
//     if(name.indexOf("a")===-1){
//         return false;
//     }
//     return true;
// }
// let result2= studentList.filter(checkLetters)
// console.log(result2)



// Find Method
// will return the emelent of array according to their types if array contains a obj then it will return array if string then string if number then number etc.

// find return first elements only when it meets the condtion like 
// let students=[
// {name:"Akhilesh",id:0},
// {name:"Abhimanyu",id:1},
// {name:"Anshul",id:2},
// {name:"Manvi",id:3},
// {name:"Abhimanyu",id:4},
// ];

// let elem=students.find((elem)=>{
//     return elem.id === 1;
// })
// console.log(elem)

// let elem2= students.find((elem)=>{
//     return elem.name === "Anshul";
// });
// console.log(elem2);

// let relem= students.find((elem)=>{
//     return elem.name === "Abhimanyu";
// });
// console.log(relem);

// let number=[45,56,86,12,94,145];
//  let result=number.find((ele)=>{
//     return ele>75; // will not print more than one number because this check for only one condition
//  })
//  console.log(result)

// let number=[45,56,86,12,94,145];
//  let result=number.find((ele,index)=>{
//    console.log(`element ${ele} at index${index}`)
//     return ele>75; // will not print more than one number because this check for only one condition
//  })
//  console.log(result)

 /* 
 key points of find method
 1. it returns the first element that satisfy the condition.
 2. if no element is present that satisfy the condtion, it will return undefined.
 3. the typeOF returned element will be same as elemnt that satisty the condtion.
 4. it is a non-mutating method.
 */

 