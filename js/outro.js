var gastoTotal;
var nome = localStorage.name;
// Função que pega o valor Total Atual
function getdata() {
    firebase.database().ref('users/'+nome).once('value').then(function (snapshot) {
        var valTotal =snapshot.val().despesaTotal;
        gastoTotal = valTotal;
    })
}

// ao clicar em AddReceita
const button1 = document.getElementById("addReceita");
const database = firebase.database();
const usersRef = database.ref('/users');

button1.addEventListener('click', e => {
const valor = document.getElementById("valor").value;
Total = Number(valor)+ Number(gastoTotal);
e.preventDefault();
usersRef.child(nome).update({
    despesaTotal: Total
})
alert("Gasto Registrado!");
});