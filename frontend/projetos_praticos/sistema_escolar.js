/*
  transformar notas escolores
  crie um algoritmo que transforme as notas do sistema
  numérico para sistema de notas em caracteres tipo A B C
  * de 90 para cima - A
  * entre 80-89    - B
  * entre 70-79     - C
  * entre 60-69     - D
  * menor que 60    - F
*/



function getTotal(total){
    let alunoA =total>=90 && total<=100
let alunoB=total>=80 && total<=89
let alunoC=total>=70 && total<=79
let alunoD=total>=60 && total<=69
let alunoF=total<60 && total>=0



if(alunoA ){
   resultadoFinal="A"

}else if(alunoB){
    resultadoFinal="B"
}
else if(alunoC){
    resultadoFinal="C"
}
else if(alunoD){
    resultadoFinal="D"
}else if(alunoF){
    resultadoFinal="F"
}
else{
    resultadoFinal="nota invalida!"
}
return resultadoFinal



}
console.log(getTotal(-1))
console.log(getTotal(-10))
console.log(getTotal(80))
console.log(getTotal(70))
console.log(getTotal(60))
console.log(getTotal(75))
console.log(getTotal(69))
console.log(getTotal(78))

