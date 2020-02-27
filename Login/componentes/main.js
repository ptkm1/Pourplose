let container = document.getElementById('container')
//Chamando Status de Autenticação
firebase
.auth().onAuthStateChanged(function(user) {
if (user) {
  console.log(user.email + ' Está logado')
  let infor = document.getElementById("infor")
  let circulo = document.getElementById('circulo')
  let foto = user.photoURL


  console.log(user)
  infor.innerHTML = `${user.displayName}`

  if(user.photoURL != null){
    circulo.innerHTML = `<img src="${foto}">`
  }
  


  
  



}else {
    setTimeout(function(){
      window.location.href = 'index.html'
    },5000)
  }
});


var deslogar = document.getElementById('logOut1')

deslogar.addEventListener('click', evento =>{
  evento.preventDefault()

    firebase
        .auth().signOut().then(function() {
          alert('Deslogado')
          window.location.href = 'index.html'
        })
        
        
        .catch(function(error) {
          console.log("Erro ao deslogar, favor atualize a pagina.")
        });

}) 


