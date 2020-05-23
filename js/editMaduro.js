const button2 = document.getElementById("salvaMaduro");

var nome = localStorage.name;
const database = firebase.database();
const usersRef = database.ref('/users');

// Edita Maduro
button2.addEventListener('click', e => {
  const qtdMaduro = document.getElementById("qtdMaduros");
  e.preventDefault();
  usersRef.child(nome).update({
    qtdMaduro: qtdMaduro.value
  })
  alert("Safra Editada!");
});



