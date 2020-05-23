var btnLogin = document.getElementById('btnLogin');
var inputEmail = document.getElementById('inputEmail').value;
var inputPassword = document.getElementById('inputPassword');

btnLogin.addEventListener('click', function () {

    var inputEmail = document.getElementById('inputEmail').value;
    var resultado = inputEmail.substring(0, 5);
    //variavel local
    localStorage.name = resultado.substring(0, 5);
    firebase.auth().signInWithEmailAndPassword(inputEmail, inputPassword.value).then(function (result) {
        window.location.replace('initial-page.html');
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...

        alert(errorMessage);
        // console.log("Failure!")
    });
});