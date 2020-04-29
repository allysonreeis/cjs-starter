var bodyElement = document.querySelector('body');

var button = document.querySelector('button');
button.setAttribute('onclick', `search()`);

function search () {
  var name = document.querySelector('input').value;
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.github.com/users/'+ name +'/repos');
  xhr.send(null);
}