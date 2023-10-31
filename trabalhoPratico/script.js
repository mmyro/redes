function auth(){
    var user = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (user == 'myro' && password=='1234'){
        window.location.assign('home.html')
        alert("Login com sucesso!");
    }
    else{
        alert("Informaçao errada!");
        return;
    }
}