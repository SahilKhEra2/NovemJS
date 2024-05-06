let arr=[1,2,[1,2,3,4],{name:"sahil",email:"@gmail.com",phone:98989}];

console.log(arr[2][3]); // accessing elemetns of the nested array
console.log(arr[3].email,arr[3].phone); // accessing elemetns of the object inside the array

let arrr=[45,{name:"sahil",email:"@g.com"},[75,[0,1,{hobbies:["singing","gaming"]}]]] // we have to print both values of hobbies
 
console.log(arrr[2][1][2].hobbies);