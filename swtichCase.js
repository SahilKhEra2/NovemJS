let str="user";
switch(str){
    case"user":{
      console.log("this is user");
      break; // if here we get requried output and don't use break then it will execute all the code after finding the match
    }
    case"admin":{
      console.log("this is admin");
      break;
    }
    case"sub-string":{
      console.log("this is sub-string");
      break;
    }
  default:{ // if we don't get the output match with case then we will get the default value 
    console.log("no match");
  }
}
