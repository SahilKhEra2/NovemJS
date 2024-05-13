//example
// let arrowFunc =(name, age,college)=>{
//     console.log(`My name is ${name},my age is ${age} and i am from ${college}`)
// }
// arrowFunc("sahil",23,"hpurc"); 

//example
// const obj={
//     name:"sahil",
//     age:23,
//     college:"hpurc",
//     yo: ()=>{
//         console.log(this)  // we can't use this keyword with arrow function with it we will get empty object because this is pointing to the window object 
//     }
// }

// obj.yo(); /* arrow function does not create their own "this" binding.
// In obj the yo is an Arrow Function , and arrow function does not create their own this binding, due to which, this will point to what  it was actuall pointing before, which was window object.
// */
// console.log(this) // this will print empty window object 


// // example 
// let obj3={
//     name:"sahil",
//     age:19,
//     college:"hpurc",
//     address:{
//         street:"khaniyara",
//         house:2232,
//         print:function(){
//             console.log(this)
//         }
//     }
// }
// obj3.address.print()

//example
// let obj4={
//     name:"sahil",
//     age:19,
//     college:"hpurc",
//     address:{
//         street:"khaniyara",
//         house:2232,
//         print2:function(){
//             let print3 =()=>{ 
//             console.log(this); // this wil print the address object because it is inside the function() and it will create its own bindig of object (because it has higher priority than the ()=>{})
//             };
//         print3();
//         }
//     }
// }
// obj4.address.print2();


//Higher Order Functions
// callback Functions  which accepts other functions as a argument and if function can return value 

// A callback function is a function , that is passed as an argument to some another function, basically it allows a function to call another function 

//Example 1
// let sumutils=function(){
//     console.log("hello!!!")
// };

// let func=function(fx){
//     console.log("hiiii!1");
//     fx();
// }
//  func(sumutils);

//example 2
// let sumutils=function(a,b){
//     console.log("hello!!!")
//     return a+b;
// };

// let func=function(fx,a,b){
//     console.log("hiiii!1");
//     console.log(fx(a,b));
// }
//  func(sumutils,2,4);


//Example 3
//  let gm=function(gf,gn){ 
//     console.log("Good Morning");
//     gf();
//     gn();
//  }
// let gf=function(){
//     console.log("Good after");
// }

// let gn=function(){
//     console.log("Good night");
// } 

// gm(gf,gn) 

//example
//SetTimeout   
// takes two parameters (arrowFunc,ms)
// setTimeout(()=>{
//     console.log("hiii");
// },5000) //  if we don't pass ms(5000) parameter then it will be printed as it is called otherwise it will be printed after delay of 

//example
// SetInterval also takes two arguments
// setInterval(() =>{
//     console.log("i will be print agian after two seconds")
// },2000); // It will be printed after delay of 2 sec again and again


// example 
// function redirecCall(){
//     console.log("hello");
// }

// let intervalCount=setInterval(redirecCall,1000);
// setTimeout(() => {
//     clearInterval(intervalCount);
//     // we will be using it to stop the iterations
//     console.log("interval stopped after 5 seconds"); 
// }, 5000);


//example
// let  fx=()=>{
//     console.log("hii of fx");
// }
// let fx2=()=>{
//     console.log("hii from fx2");
// }
// let funca= function(fx,fx2){
//     fx();
//     setTimeout(() => { // this is asynchronous function so it will allow the fx2() to get executed before it because it will be executed after 3000
//         console.log("sorry to wait for 3 seconds");
//     }, 3000);
//     fx2();
// };
// funca(fx,fx2);