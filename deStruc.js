let hotel={
    name:"atithi palace",
    location:"near veer kurwar singh colony",
    categories:["indian","chinese","italian"],
    mainMenu:["foodA","foodB","foodC"],
    openingHours:
    {
    sunday:{open:"09:00am", close:"11:00 am"},
    monday:{
        open:"10:00am",
        close:"10:00pm",
},
},
};


// Destructuring
/*
destructuring assignment is used to unpack values from an array, or properties from object into distinct variables.
*/
// 1.

let items=[1,4,5,8];

/* let a =items[0]
// let b=items[1]
// let c=items[2]
// let d=items[3]
 console.log(a,b,c,d)
Instead of doing this we use destructring.
 */
// let[a,b,c,d]=items; // this is better way a,b,c,d are variables not the elements of array and we are dstructuring the array that's why we are writing the variables inside[] and we can't redeclare these variable name again 
// console.log(a,"",b,"",c,"",d);

// 2.

let arr=[2,3,4,5,6,7]
let[x,y,z,...rest]=arr 
/*
This line uses array destructuring to assign values from the array arr to variables x, y, z, and rest.

x is assigned the first element of arr (which is 2).
y is assigned the second element of arr (which is 3).
z is assigned the third element of arr (which is 4).
...rest (using spread operator which will give result in array because we are using rest operator with[]) is assigned an array containing all remaining elements of arr (which is [5, 6, 7]).
*/
// console.log(x,y,z,rest)


// 3.

let [first,second]=hotel.categories; // will store first and second element of the object's categories, categories storing the elements in array that's why we are using the [] if they were object with {} then we will use {} and write the variable inside {}
// console.log(first," ","second");

// 4.

// let [first, ,third]=hotel.categories; // will store the first and third element but not second becasue that space is empty there is no variable so it will skip the second 
// console.log(first," ","third");

//5.

[first,second]=[second,first]; // it will be swaped
// console.log(first,second);

//6.

//destructuring in nested array
let nums=[2,3,[4,[5,6]]];

// //we wang to access 4,5 and 6
let[, ,[a,[b,c]]]=nums;
// console.log(a," ",b," ",c);
/*
1. The first element (2) is skipped because of the initial comma ,.
2. The second element (3) is also skipped because of the next comma ,.
3. The third element ([4, [5, 6]]) is destructured further:
4. a is assigned the value 4.
5. [b, c] is assigned the array [5, 6], so b is 5 and c is 6.
*/

//7.
// here we are destructring the element of object so we are writing variable names inside the {. in it variable names are keys that should be same as in the object
let {name,locationa,location,categories }=hotel; // if we write wrong key then we will get undefined
// console.log(name);
// console.log(locationa); //will get undefined for wrong key name 
// console.log(locationb); //and if key is not present in destructring object then we will get reference error 
// console.log(location);
// console.log(categories);

//8.
let {name:nameA, location:locationA}=hotel; //we can store the keys in another key if we want to change the name of they key  
// console.log(nameA); // now nameA has the value of name and locationA of location
// console.log(locationA);


// accessing opening hours object 
// let {openingHours}=hotel;
// console.log(openingHours) // will print both objects of the openinghours
// console.log(openingHours.sunday) // will print only sunday object

//9.

let {sunday:{open,close}}=hotel.openingHours // accessing sunday's opening and closing time only 
// console.log(open,"",close) // if we print only sunday then we will get whole sunday object

// 10.
// let {sunday}=hotel.openingHours // accessing sunday's opening and closing time only 
// console.log(sunday)// it will print whole sunday object  define sunday first in destructuring process


// Sets in javaScript

// it is a collection of unique values and it can hold elements of various datatypes 

//11.
let itemSet= new Set([1,2,3,2,4,"true",true,'sakshi',"sakshi"]);
// console.log(itemSet); // will print dublicate values only once and returns a object

//first way to convert the set into array 
// let array1=Array.from(itemSet); // it is important to convert it into array
// console.log(array1)

// 12.
//second way to convert the set into array 
let array2=[...itemSet]; // spread operator also converts obj into array because we are using spread operator inside []
// console.log(array2);

//13.
// how to add elements in the set 
// itemSet.add("jasleen");
// console.log(itemSet)
// let result=Array.from(itemSet)
// console.log(result) // this will give error because push does not work with the set so we will use this only with array see the following example


//14.
//how to delete 
// itemSet.delete(true) // here we pass the element name to be delete
// let array3=Array.from(itemSet);
// console.log(array3)

array2.push("sahil");
console.log(array2);

//15.
// array2.push(75); // will add it in the end of the set 
// let array1=Array.from(itemSet);
// console.log(array2)

// 16.
// if we don't pass opening hours in first object 
let {openingHours, ...diffObject}=hotel; // openingHours will not be print
// console.log(diffObject)  // if we don't want a field in output then write same name of that object and use spread operator which represents all the elements of the objects excepts the openingHours 

//17.
let{sunday,...diffObject2}=hotel.openingHours;
// console.lg(diffObject2) // this will all elements of opening hours except sunday whose name is same as in its object


// 18.
let user={
    name:"sahil",
    age:19,
    university:'HPCU',
    password:"kya Password",
};

let {password,...apartFromPasswrod}=user; // password won't be print 
// console.log(apartFromPasswrod)
// console.log(user.password) // here it will be undefined 
