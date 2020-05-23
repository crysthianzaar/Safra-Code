const button = document.getElementById("btnRegister");

const database = firebase.database();
const usersRef = database.ref('/users');

// Adiciona Safra
button.addEventListener('click', e => {
  const nomesafra = document.getElementById("inputEmail").value;
  resultado = nomesafra.substring(0, 5);
  e.preventDefault();
  usersRef.child(resultado).set({
    valorTotal: 0,
    despesaTotal: 0,
    safra: resultado,
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