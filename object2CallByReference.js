//call by reference:
let person={
    name:"sahil",
    age:23,
    address:"kangra"
}
// console.log(person);

// this is done by refernece we inherit the properties of person into anotherperson. if we change the property value of the object from original or inherited object the change will reflect in both means original object will be updated with new value for all

// let anotherPerson=person;
// anotherPerson.name="khera";
// console.log(anotherPerson);
// console.log(person);

// example 2 
// let nextPerson= anotherPerson;
// nextPerson.name="reshu";
// console.log(nextPerson)
// console.log(anotherPerson);
// console.log(person);

for(let key in person){
    // console.log(`${key}=${person[key]}`); // this will print keys and values of keys 
    // console.log(`${key}=${person.key}`); // this will not print values of keys 
    // console.log(key); // this will print keys 
    // console.log(`${key}=${person["key"]}`); // this will not print values of keys 
}
