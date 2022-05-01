// callback utlizamos em outra funçao

function sayMyName(name){
  console.log("excultando uma callback antes")
  name()
  console.log("execultando depois")
  
}

 sayMyName(()=>{
   console.log("estou em uma callback")
 })



