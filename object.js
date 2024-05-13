// we have covered object call Bind
//object is a collection of keys and values or key-values pair and we can also store multpile datatypes within it 

// const person = {

//     Name:"sahil",
//     age:20,
//     address:{
//         street:"8B",
//         locality:"industrial Area",
//         country:"India",
//         sayHello3: function()
//         {
//             console.log(`this is used for ->${this.country}`);
//             console.log(`this is used for ->${this}`);// this will print object,object
//         },
//         house:{
//     floor:1,
//     room:3,
//     furnished:["sofa","kitchen"],
//     sayHello2 : function(){
//         console.log(this);
//     }
//         },
//     },
//     phone:8219020274,
//     hobbies:["gaming","editing","shooting","studying","coding"],
//     sayName:function(){
//         console.log(`this ${this.phone} `);
//     }

// };

// console.log(person.Name);
// console.log(typeof(person.Name));
// console.log(person.age);
// console.log(typeof(person.age));
// person.address.locality="kangra";
// console.log(person)
// console.log(typeof(person.address))
// person.address.house.furnished.push("bedroom"); 
// console.log(person) // we will get array in this case

// let arr=person.address.house.furnished
// console.log(arr) // we will get array in this case

// // deleting a property of the object
// delete person.phone;
// console.log(person)

// delete person.address.country;
// console.log(person);

// function vs methods
// the function belongs to object called methods
// this keyword refers to object 

// let arr2=person.sayName()
// console.log(person.sayName());

// person.address.sayHello3();
// person.sayName()



// Call
// with call an object can use method , that is belonging to some other object 

// let obj={
//     greet: function(age,college){
//         console.log(`welcome ${this.name} ${age} ${college} `);
//     }
// }
//     let stud1={
//         name:"reshu"
//     }

//     let stud2={
// name:"sahil"
//     }
// console.log(obj.greet.call(stud1,23,"hpurc")); // here we give the object as a argument whose method we want to use 

//Bind
//Bind, is used to borrow mthods from another object

// function greet2(){
//     console.log(`Hello ! ${this.firstName} ${this.lastName}`);
// }
// let person4={
//     firstName:"sahil",
//     lastName:"khera"
// }

// // console.log(greet2.bind(person4)) //this will not print because it returns new object
// let greet3= greet2.bind(person4);  // we can't pass arguments in it 


//example 2 of wind
let ok={
greet2: function(){
    console.log(`Hello ! ${this.firstName} ${this.lastName}`);
}
}

let person5={
    firstName:"sahil",
    lastName:"khera"
}

let greet4= ok.greet2.bind(person5);
console.log(greet4()) // it will give undefine and result
greet4() // it will give proper output