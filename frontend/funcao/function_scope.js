let subject
// o scopo so pode ser acessada localmente 
function createThink(subject){
    subject='study'
    return subject
}

console.log(createThink())
console.log(subject)