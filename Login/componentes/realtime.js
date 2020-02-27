var nome = document.getElementById('nome');
var idade = document.getElementById('idade');
var add = document.getElementById('add')
var modalBtn = document.getElementById('itens')
var modal = document.getElementById('its')
var closeModal = document.getElementById('closeModal')
var userList = document.getElementById('usuarios')

modalBtn.addEventListener('click', function(event){
  event.preventDefault();
  modal.style.zIndex = 9999
  
})
closeModal.addEventListener('click', evt =>{
  evt.preventDefault()
  modal.style.zIndex = -5
})

add.addEventListener('click', function(e){
  e.preventDefault();
  create(nome.value, idade.value);
 
  

})

function create(name,id){
  var data = {
    name: nome.value,
    id: idade.value
  };

  return firebase.database().ref().child('users').push(data);
}

firebase.database().ref('users').on('value', function(snapshot){
  userList.innerHTML = ''
  snapshot.forEach(function(item){
    var li = document.createElement('li')
    li.appendChild(document.createTextNode(item.val().name + ' : ' + item.val().id));
    userList.appendChild(li)
  })
})