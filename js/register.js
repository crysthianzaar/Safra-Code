btnRegister.addEventListener('click', function () {
    var btnRegister = document.getElementById('btnRegister');
    var email = document.getElementById('inputEmail').value;

    firebase.auth().createUserWithEmailAndPassword(email, inputPassword.value).then(function (resp) {
        alert("Usuário Cadastrado!");

    }).catch(function (err) {
        // Handle Errors here.
        console.log(err)
        console.log(err.message)
    });
    window.location.replace('index.html');
});