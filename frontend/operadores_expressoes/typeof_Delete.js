/***
 * operadores unarios 
 * typeof verifica o tipo 
 * delete deleta 
*/

const person={
    nome:'joao',
    idade:34
}

console.log(typeof person)

delete person.idade
console.log(person) // deletando idade