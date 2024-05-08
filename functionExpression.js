// Function expression
var func = function(c=14,d="sahil",e){
    console.log(`the value of c is ${c} and d :${d} and e:${e}`)
};
func("sahil","kangra",3); // if we will call it before declearation then we will get typeError:func is not a function because we can't call variable with () so if we are calling the function of FunctionExpression with () before declaration and if we will call it without () then we will get undefined

// diff btw function with function key word and function expression
//If we will call it before the decelartion we will get error with let,const and typError with var because with functionExpression we will get typeError because we can't call it before function decleratition but 
// function with function keyword we can call it before decleartion 



console.log(yo(2,2)) // we can't do this with functionExpression
function yo(a,b){
    return a*b;
}
