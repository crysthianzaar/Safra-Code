var gastoAdubo;
var TotalAdubo;
var gastoTotal;

var nome = localStorage.name;
// Função que pega o valor Total Atual
function getdata() {
    firebase.database().ref('users/'+nome).once('value').then(function (snapshot) {

        var valAdubo =snapshot.val().despesaAdubo;
        var valTotal =snapshot.val().despesaTotal;
        gastoAdubo = valAdubo;
        gastoTotal = valTotal;
    })
}

// ao clicar em AddReceita
const button1 = document.getElementById("addReceita");
const database = firebase.database();
const usersRef = database.ref('/users');

button1.addEventListener('click', e => {
const valor = document.getElementById("valor").value;
TotalAdubo = Number(valor)+ Number(gastoAdubo);
e.preventDefault();
usersRef.child(nome).update({
    despesaAdubo: Number(TotalAdubo),
    despesaTotal: Number(gastoTotal)+ Number(valor)
})
alert("Gasto Registrado!");
});