const errorDubugging = () => {
  //1.SYNTAX ERROR MISSING ")"

// ❌console.log("I am learning the node.js"; 
//✅Correct
console.log("I am learning the node.js");  

//2.RUNTIME ERROR

//❌ console.log(x); error as x is not defined
//✅Correct
{
let num = 89;
console.log(num)
}

//3. LOGICAL ERROR

//❌ error instead of comparison "==", there is an assignment operator "=" so that's why output not comes as "num is not 20"
let num = 20;
if(num = 30){ 
  console.log(num);
} else{
 console.log("num is not 20");
}
};
//✅ correct is if(num == 30)

module.exports = errorDubugging;