var uploader = document.getElementById('uploader')
var fileup = document.getElementById('fileup')

fileup.addEventListener('change', function(e){
  //pegando arquivo upado no html
  var file = e.target.files[0];

  //Referenciando o Storage
  var storageRef = firebase.storage().ref('arquivos/' + file.name)

  //enviar arquivo
  var task = storageRef.put(file)

  //parte do  progress
  task.on('state_changed',
    function progress(snapshot){
        var porcentagem = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        uploader.value = porcentagem;
    },
    function error(err){
        console.log(err)
    },
    function complete(){
      alert('Envio completo!')
    }
    )
})