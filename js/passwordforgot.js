var btnPassword = document.getElementById('btnPassword');
var inputPassRecovery = document.getElementById('recEmail');

btnPassword.addEventListener('click', function () {
    firebase.auth().sendPasswordResetEmail(recEmail.value).then(function (result) {
        alert("Um link para recuperação foi enviado para o seu Email!");
        window.location.replace('index.html');
    })

});