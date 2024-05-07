// console.log("continue")
// for(i=0;i<10;i++){
//     if(i<5){
//         continue; // It will skip all the iteration which will become ture
//     }
//     console.log(i);

// }

// console.log("break")
// for(i=0;i<10;i++){
//     console.log(i);
//     if(i<5){
//         break; // It will exist the loop and controler will go out of the for loop
//     }
// }

// example of break

// let boolflag= false;
// for(let i=0; i<5; ++i){
//    let boolflag2=false;
//    for(let j= i+1 ;j<5;++j){
//     if(j===3){
//         boolflag2=true;
//     }
//     console.log(i+","+j);
// }
//     if(boolflag2){
//         break;
//     }
// }

// we get new stack for  each iteration of the loop  so if we are making the flag true in end,it will be flase for the new iteration means if it is flase for 0 and in the end we are updating it to true but will be false for the next i=1 because we get new stack for each iteration. 
console.log("with Local scope variable ");
for (i = 0; i < 3; i++) {
  let boolflag = false; // local variable 
  if (boolflag) {
    break;
  }
  for (j = 0; j < 3; j++) {
    console.log(i, ",", j);
  }
  
  boolflag = true;
}

console.log("with global scope variable ");
let boolflag = false; // global variable here it will be same for all terations because it will stay in the stack it the termination of the program
for (i = 0; i < 3; i++) {
  if (boolflag) {
    break;
  }
  for (j = 0; j < 3; j++) {
    console.log(i, ",", j);
  }
  boolflag = true;
}
