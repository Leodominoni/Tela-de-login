let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type', 'password')
    }
})
function logar(){
    let usuario = document.querySelector('#usuario')
    let usuarioLabel = document.querySelector('#usuarioLabel')

    let senha = document.querySelector('#senha')
    let senhaLabel = document.querySelector('#senhaLabel')

    let msgErro = document.querySelector('#msgErro')
    let listaUser = []

    let userValid = {
        nome: null, 
        user: null,
        senha: null
    }
    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item) => {
        if(usuario.value == item.userCad && senha.value == item.senhaCadastrada){
            userValid = {
                nome: item.nomeCadastrado,
                user: item.userCad,
                senha: item.senhaCadastrada
            }
        }
    })

if(usuario.value == userValid.user && senha.value == userValid.senha){
    window.location.href = 'inicio.html' 

    let token = Math.random().toString(16).substring(2)
    localStorage.setItem('token', token)
    localStorage.setItem('userLogado', JSON.stringify(userValid))


}else{
    usuarioLabel.setAttribute('style', 'color: red')
    usuario.setAttribute('style', 'border-color: red')
    senhaLabel.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'border-color: red')
    msgErro.setAttribute('style', 'display: block')
    msgErro.innerHTML = 'Usuário ou senha incorretos'
    usuario.focus()
    }
    
}