const button1 = document.getElementById("salvaMudas");

var nome = localStorage.name;
const database = firebase.database();
const usersRef = database.ref('/users');

// Edita MUdas
button1.addEventListener('click', e => {
  const qtdMudas = document.getElementById("qtdMudas");
  e.preventDefault();
  usersRef.child(nome).update({
    qtdMudas: qtdMudas.value
  })
  alert("Safra Editada!");
});




