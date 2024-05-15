// let number=[45,85,67,75]; // mutable can change original
// //1 
// number.reverse(); // reverse method is mutable 
// console.log(number);
 

//2
// const fruits=["apple","banana","grapes"];
// let str= fruits.join("and"); // it will give us string of array elements which will be joined with and , and  it is a immutagble method
// console.log(fruits)
// console.log(str);
// console.log(typeof(str));



//3
// let arr=["vish","sak","man","soni","sahil"];
// let arr2=arr.slice(1) // will give all elements of str after index 1
// console.log(arr)
// console.log(arr2)
// let arr3=arr.slice(2,4); // will print values after index 2 and till 4. both are index not length oor first one is inclusive and the second one is exclusive
// console.log(arr)
// console.log(arr3) 

//4  splice mehtod
// let arr=[2,3,4,5,6,8,9];
// let arr2=arr.splice(3,2); //3 is starting value and 2 is length means how many values we want to delete from in this case 2 , so we will get 
// // splice is mutable 
// console.log(arr);
// console.log(arr2);

// example 2
// let arr=[7,6,4,3,3,2,22,45,55,66];
// console.log(arr);
// let arr2=arr.splice(2,2,4,5,6) 
// console.log(arr);
// console.log(arr2) //  it will give extracted or delted values 
// splice takes 3 argument  first is starting index second is length we want to delete from starting and other are value which we want after the starting index 
// the first 2 is starting index,second 2 is length how many values we want to delete and 4,5,6 orr so on will be values that will be added after index 2
//if we want to delete nothing then simply add 0 as a second argument then no element will be deleted and values will be updated after starting index 

// example 3
// let arr=[2,3,4,5,6]
// console.log(arr)
// let arr2=arr.splice(2,0,[2,3],'sahil'); // will delete 0 element and if we don't give any delete length then it will not update the or inerst first updating value in array 
// console.log(arr)

// key points
// it is a mutating method
// it returns an array which consists of extracted elements
// (startindex, deleting length , updating values)



let nestedArray=[45,46,{num:12, arr:[4,"sahil",["manvi","tamanna"]]}];
console.log(nestedArray[2].arr[2][1]) // printing the tamanna only 

