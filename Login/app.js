//DOM
const email = document.getElementById('emailInput');
const pass = document.getElementById('passInput');
const login = document.getElementById('login')
const cadastro = document.getElementById('cadastro')
const display = document.getElementById('display')

//Configurando FIREBASE
var firebaseConfig = {
  apiKey: "AIzaSyDELODnFGInCaB38Ow9a0PaEvb8o-99Bmo",
  authDomain: "pourplose1.firebaseapp.com",
  databaseURL: "https://pourplose1.firebaseio.com",
  projectId: "pourplose1",
  storageBucket: "pourplose1.appspot.com",
  messagingSenderId: "433717875723",
  appId: "1:433717875723:web:84797fe224f10bf0dd230e"
};
firebase.initializeApp(firebaseConfig);

//Cadastrando usuário no AUTH 
cadastro.addEventListener('click', e =>{
  e.preventDefault();
    firebase
    .auth().createUserWithEmailAndPassword(email.value, pass.value)
    .then(function(){
      alert("Usuário cadastrado!")
    })
    .catch(function(error) {
      alert("Não foi possivel Cadastrar");
    });
})
//Login com Social media
const github = document.getElementById('loginGit')

github.addEventListener('click', function(){

  var provider = new firebase.auth.GithubAuthProvider();
  signIn(provider)
})

function signIn(provider){
  firebase.auth()
  .signInWithPopup(provider)
  .then(function(){
    console.log(result)
    var token = result.credential.accessToken;
    displayName.innerText = `Bem vindo ${result.user.displayName}`
  })
  .catch(function(error){
    console.log(error)
    alert('Falha na Autenticação')
  })
}





//Autenticando Login do Usuário
login.addEventListener('click', event =>{
  event.preventDefault(); //Tirar quando criar pagina de WELCOmE profile
    firebase
    .auth().signInWithEmailAndPassword(email.value, pass.value) //Pegando valores do input
      .then(function(result){
        alert('Usuário Autenticado')  
        logOut.style.display = 'flex'//Adiciona o botao de LOGOUT
      })
      .catch(function(error) {
        alert('Desculpe, não foi possivel Logar, tente criar uma conta se não tiver.')
      });

})
//Deslogando do usuário
const logOut = document.getElementById('logOut')
logOut.addEventListener('click',  function(e){
      firebase
      .auth().signOut().then(function() {
        display.innerHTML = `Deslogado`
        logOut.style.display = 'none'
        alert('Deslogado')
      })
      
      
      .catch(function(error) {
        console.log("Erro ao deslogar, favor atualize a pagina.")
      });
})


//Checando status do usuario ( SE ESTA LOGADO OU DESlOGADO )
firebase
.auth().onAuthStateChanged(function(user) {
if (user) {
    console.log(user.email + ' Está logado')
    display.innerHTML = 'Autenticado'
    window.location.href = 'main.html'
    logOut.style.display = 'flex'//Adiciona o botao de LOGOUT
  
}else {
    display.innerHTML = `Deslogado`
    logOut.style.display = 'none'  
    console.log("Não Logado ainda.")
  }
});

