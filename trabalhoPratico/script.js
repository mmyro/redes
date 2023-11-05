function auth() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (username == '' || password == '' || confirmPassword == '' || email == '') {
        alert("Preencha todos os campos, por favor.");
    } else if (password !== confirmPassword) {
        alert("As senhas não coincidem. Tente novamente.");
        return;
    } else {
        window.location.assign('home.html');
        alert("Obrigado, " + username + " o seu registo foi feito com sucesso.");
    }
}