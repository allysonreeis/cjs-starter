let name = '';
var bodyElement = document.querySelector('body');

var input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Digite o usuário')

var button = document.createElement('button');
button.setAttribute('onclick', 'search('+ input.value +')');
button.innerText = 'Buscar';

bodyElement.appendChild(input);
bodyElement.appendChild(button);

function search (name) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.github.com/users/'+ name +'/repos');
  xhr.send(null);
}