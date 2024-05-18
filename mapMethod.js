//map method
// let arr=[12,10,14,15,20];
// it will return an array after traversing each element in the array
// we can use it for traversal as well.
// length of the array returned will be equal to the original array 

// let newArr=arr.map((elem,index)=>{
//     // console.log(elem,index);
//     return elem,index;
// });
// console.log(newArr);

let users=[
    {firsName:"Dev", lastName: "Raj"},
    {firsName:"sahil", lastName: "khera"},
    {firsName:"sakshi", lastName: "soni"},
    {firsName:"sakshiiii", lastName: "choudhary"},
];

let result=users.map((elem)=>{
    return elem.firsName+" "+elem.lastName
})

console.log(result)

// let result2=result.map((ele)=>{ // this will join the string from end 
//      return  result.join('and');
// })
// console.log(result2)

let result3=result.map((elem)=>{
    let arr=elem.split(" ");
    console.log(arr);
    return arr.join("and");
});
console.log(result3)  // we have to convert the result3 in uppercase