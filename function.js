// a function returns a react component 
// JavaScript, functions are reusable blocks of code that perform specific tasks. They are essential for organizing and structuring code, making it more modular and maintainable. 

// function sayHello(){
//     console.log("hello")
// }

// function sayHello(name,college){ // this function is taking two parameters 
//     console.log(`i'm ${name} from ${college}`);
// }
// sayHello('sahil',"kangra");// we are passing arguments


function sum(a,b,c=12){// the default value of c will be replaced with the 4 if we don't pass any value to it then it will be default 
    // console.log(a+b+c);
    return a+b+c;
}
let r=sum(2,3,4)
console.log(r)
// console.log(sum(4,5,6))

// function sum2(a,b,c){
//     console.log(a+b+c); 
// }

// let result=sum2(3,4,5);
// console.log(result)

