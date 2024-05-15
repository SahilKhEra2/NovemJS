// Immediately Invoked Function Expression or closer function

//1
// (
//     function(){
//     console.log("hey");  // outter () protects this local scope from outside access or global access
// })()


//2
// (function(){
    //         var variable="random";
    //         console.log("im limited to this block only"+variable);
//     })();

    // console.log(variable) // we can't access iffe from outside of it's local scope like other function
    // IIFE helps to keep the gloabal scope clean by encapsulating variable and fucntion +s within a scope or we can say it avoids gloabal scope popllution

    //3
    // (function(){
        //    console.log(hoistedvar);    // will give undefined beacuse of hoisting of var on top
        //    var hoistedvar="i am a hoisted variable";
        // })()
        
        //key points about IIFE
        // it will be called  when we need to get function executed on load of program without call
        // it's memory will be vanished after execution
        // it can't we access outside of () 
        // it is called only once

