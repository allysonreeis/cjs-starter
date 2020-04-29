function checaIdade(idade) {
  // Retornar uma promise
  return new Promise(function(resolve, reject){
    setTimeout(()=>{
      idade > 18 ? resolve() : reject()
    }, 2000 );
  });
 }
 
 checaIdade(25)
  .then(function() {
    console.log("Maior que 18");
  })
  .catch(function() {
    console.log("Menor que 18");
  });
 