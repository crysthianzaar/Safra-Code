const button = document.getElementById("apagaDados");

const database = firebase.database();
const usersRef = database.ref('/users');
var nome = localStorage.name;

// Adiciona Safra
button.addEventListener('click', e => {
  e.preventDefault();
  usersRef.child(nome).update({
    valorTotal: 0,
    despesaTotal: 0,
    dataInicio: "",
    despesaAdubo: 0,
    despesaDefensivo: 0,
    despesaMaoObra: 0,
    qtdMaduro:0,
    qtdMudas: 0,
    qtdPilado:0,
    valor:0
  })
  alert("Conta cadastrada!");
});