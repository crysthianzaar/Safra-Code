const button3 = document.getElementById("salvaPilado");

var nome = localStorage.name;
const database = firebase.database();
const usersRef = database.ref('/users');

button3.addEventListener('click', e => {
  const qtdPilado = document.getElementById("qtdPilados");
  e.preventDefault();
  usersRef.child(nome).update({
    qtdPilado: qtdPilado.value
  })
  alert("Safra Editada!");
});