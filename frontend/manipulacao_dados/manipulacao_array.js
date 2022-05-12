let techs=['html','css','javascript']

// adicionar um item no fim 
techs.push("nodejs")

// adicionar item no começo

techs.unshift("java")
// remover no fim 
techs.pop()
// remover no começo 
techs.shift()
// pegar somente alguns elementos no array começa com 1
// O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é necessário) de um array original. O Array original não é modificado.
techs.slice(1,1)

// console.log(techs.slice(1,3))

// remover 1 mais item do array 

console.log(techs.splice(1,1))

// encontrar uma posição no array

let index=techs.indexOf('css')

console.log(index)
