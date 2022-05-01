// transformar um numero quebrando em 2 casas decimais e trocar por ponto e virgula

let number=892759759.8979
// o toFixed reduz para duas casas decimais depois dois pontos
// replace troca dois pontos para o ponto e virgula 

console.log(number.toFixed(2).replace(".",","))