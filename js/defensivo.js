var gastoDefensivo;
var TotalDefensivo;
var gastoTotal;

var nome = localStorage.name;
// Função que pega o valor Total Atual
function getdata() {
    firebase.database().ref('users/'+nome).once('value').then(function (snapshot) {

        var valDefensivo =snapshot.val().despesaDefensivo;
        var valTotal =snapshot.val().despesaTotal;
        gastoDefensivo = valDefensivo;
        gastoTotal = valTotal;
    })
}

// ao clicar em AddReceita
const button1 = document.getElementById("addReceita");
const database = firebase.database();
const usersRef = database.ref('/users');

button1.addEventListener('click', e => {
const valor = document.getElementById("valor").value;
TotalDefensivo = Number(valor)+ Number(gastoDefensivo);
e.preventDefault();
usersRef.child(nome).update({
    despesaDefensivo: Number(TotalDefensivo),
    despesaTotal: Number(gastoTotal)+ Number(valor)
})
alert("Gasto Registrado!");
});