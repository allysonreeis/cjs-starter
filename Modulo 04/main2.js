var bodyElement = document.querySelector('body');

var input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Digite o usuário')

var button = document.createElement('button');
button.innerText = 'Buscar';

bodyElement.appendChild(input);
bodyElement.appendChild(button);