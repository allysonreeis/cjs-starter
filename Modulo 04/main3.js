/**
 * Existem outras formas mais interessantes de resolver esse problema, porém
 * fiz dessa maneira para explorar outros modos de resolver e assim fixar
 * os diversos conteúdos do javascript.
 */
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

      ulElement.innerHTML = "<li>Carregando...</li>";

      xhr.onreadystatechange = function(){
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve();
            var obj = JSON.parse(xhr.responseText);
            renderRepositories(obj);
          } else {
            reject();
          }
        }
      }
  })
  .then(()=>{
    console.log('Ok!');
  })
  .catch(()=>{
    ulElement.innerHTML = "<li>erro 404 - Usuário não encontrado</li>";
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
