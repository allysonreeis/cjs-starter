var bodyElement = document.querySelector('body');
var ulElement = document.querySelector('ul');

var button = document.querySelector('button');
button.setAttribute('onclick', 'search()');

function search () {
  return new Promise(
    function(resolve, reject){
    
      var name = document.querySelector('input').value;
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://api.github.com/users/'+ name +'/repos');
      xhr.send(null);

      xhr.onreadystatechange = function(){
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('Ok');
            var obj = JSON.parse(xhr.responseText);
            renderRepositories(obj);
          } else {
            reject('Erro');
          }
        }
      }
  })
  .then(()=>{
    console.log('Ok!');
  })
  .catch(()=>{
    console.warn('erro 404 - Usuário não encontrado');
  });
}

function renderRepositories(repositories) {
  ulElement.innerHTML = "";
  repositories.forEach(repository => {
    var liElement = document.createElement('li');
    liElement.innerText = repository.name;

    ulElement.appendChild(liElement);
  });
}
