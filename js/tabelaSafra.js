var nome = localStorage.name;

function getdata() {
  var user=document.getElementById("user").value;
  firebase.database().ref('users/'+nome).once('value').then(function (snapshot) {
      //here we will get data
      //enter your field name
      var name=snapshot.val().safra;
      var datainicio =snapshot.val().valorTotal;
      var quantMudas = snapshot.val().despesaTotal;
      var qtdMaduro = snapshot.val().qtdMaduro;
      var qtdPilado  = snapshot.val().qtdPilado;

      //now we have data in variables
      //now show them in our html

      document.getElementById("name").innerHTML=name;
      document.getElementById("datainicio").innerHTML=datainicio;
      document.getElementById("qtddMudas").innerHTML=quantMudas;
      document.getElementById("qtdMaduro").innerHTML=qtdMaduro;
      document.getElementById("qtdPilado").innerHTML=qtdPilado;
  })
}
const button = document.getElementById("btnVai");
const database = firebase.database();
const usersRef = database.ref('/users');
button.addEventListener('click', e => {
  const nomesafra = document.getElementById("name").value;
  const dataStart = document.getElementById("datainicio").value;
  const quantMudas = document.getElementById("qtddMudas").value;
  const quantMaduros = document.getElementById("qtdMaduro").value;
  const qtdPilado = document.getElementById("qtdPilado").value;
  
  e.preventDefault();
  usersRef.child('Principal').update({
    safra: nomesafra,
    dataInicio: dataStart,
    qtdMudas: quantMudas,
    qtdMaduro: quantMaduros,
    qtdPilado: qtdPilado
  })
  alert("Safra Alterada!");
});


