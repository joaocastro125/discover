// scopo é um visubilidade de alguma variavel do js
// o let é local e a const não pode ver
console.log('>existe x depois do bloco?',y)
const x=3
{
    let x=0
}
console.log('>existe x depois do bloco?',y)