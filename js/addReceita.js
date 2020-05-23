var adicionaReceitaOutra;
var totalVenda;

var nome = localStorage.name;
// Função que pega o valor Total Atual
function getdata() {
    firebase.database().ref('users/'+nome).once('value').then(function (snapshot) {

        var valor =snapshot.val().valorTotal;
        adicionaReceitaOutra = valor;
    })
}

// ao clicar em AddReceita
const button1 = document.getElementById("addReceita");
const database = firebase.database();
const usersRef = database.ref('/users');

button1.addEventListener('click', e => {
const valorSafra = document.getElementById("valor").value;
e.preventDefault();
usersRef.child(nome).update({
    valorTotal: Number(valorSafra)+Number(adicionaReceitaOutra)
})
alert("Safra Atualizada!");
});
