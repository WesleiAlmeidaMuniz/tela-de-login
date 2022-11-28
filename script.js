function logar(user, pass){
    let usuario = String(document.getElementById('user').value)
    let password = String(document.getElementById('pass').value)

    if(usuario == 'admin' && password == 'admin'){
        alert(`Parabens você está logado`)
        window.location.href = "login.html"
    } else {
        alert(`Usuario ou Senha incorreta`)
    }
}