var gastoObra;
var TotalObra;
var gastoTotal;

var nome = localStorage.name;
// Função que pega o valor Total Atual
function getdata() {
    firebase.database().ref('users/'+nome).once('value').then(function (snapshot) {

        var valObra =snapshot.val().despesaMaoObra;
        var valTotal =snapshot.val().despesaTotal;
        gastoObra = valObra;
        gastoTotal = valTotal;
    })
}

// ao clicar em AddReceita
const button1 = document.getElementById("addReceita");
const database = firebase.database();
const usersRef = database.ref('/users');

button1.addEventListener('click', e => {
const valor = document.getElementById("valor").value;
TotalObra = Number(valor)+ Number(gastoObra);
e.preventDefault();
usersRef.child(nome).update({
    despesaMaoObra: Number(TotalObra),
    despesaTotal: Number(gastoTotal)+ Number(valor)
})
alert("Gasto Registrado!");
});