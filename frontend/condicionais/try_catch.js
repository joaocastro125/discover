// try...catch
// As declarações try...catch marcam um bloco de declarações para testar (try),  e especifica uma resposta, caso uma exceção seja lançada.
// Você pode utilizar uma ou mais cláusulas catch condicionals para manipular exceções específicas. Nesse caso a cláusula catch apropriada será inserida quando a exceção espeficica for lançada.


function sayMyName(name=''){
    if(name==''){
        throw 'Nome é obrigatorio'
          
    }
}
   
    try{
      sayMyName()
    }catch(e){
        console.log(e)
    }


console.log("apos o erro ")

