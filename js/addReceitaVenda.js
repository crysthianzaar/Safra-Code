var adicionaReceitaOutra;
var madurosVar;
var madurosTotal;
var piladosVar;
var piladosTotal;
var vendas;
var totalVenda;

var nome = localStorage.name;
// Função que pega o valor Total Atual
function getdata() {
    firebase.database().ref('users/'+nome).once('value').then(function (snapshot) {
        var valor =snapshot.val().valorTotal;
        var maduros = snapshot.val().qtdMaduro;
        var pilado = snapshot.val().qtdPilado;

        adicionaReceitaOutra = valor;
        madurosVar = maduros;
        piladosVar = pilado;
    })
}


// ao clicsr em btnSelect
const button2 = document.getElementById("btnSelect");
const database = firebase.database();
const usersRef = database.ref('/users');

button2.addEventListener('click', e => {
const Tmaduro = document.getElementById("Tmaduro").value;
const Tpilado = document.getElementById("Tpilado").value;
const preco = document.getElementById("preco").value;
var piladosTotal = Number(piladosVar)+Number(Tpilado);
var madurosTotal = Number(madurosVar)+ Number(Tmaduro);

vendas = Number(Tpilado)*Number(preco)
totalVenda = Number(adicionaReceitaOutra)+Number(vendas)

e.preventDefault();
usersRef.child(nome).update({
valorTotal: totalVenda,
qtdMaduro:madurosTotal,
qtdPilado:piladosTotal
})
alert("Safra Atualizada!");
});