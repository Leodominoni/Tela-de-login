let btn = document.querySelector('#verSenha')
let btnConfirma = document.querySelector('#verConfirmaSenha')

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let curso = document.querySelector('#curso')
let labelCurso = document.querySelector('#labelCurso')
let validCurso = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmaSenha = document.querySelector('#confirmaSenha')
let labelConfirmaSenha = document.querySelector('#labelConfirmaSenha')
let validConfirmaSenha = false

let msgErro = document.querySelector('#msgErro')
let msgSucesso = document.querySelector('#msgSucesso')

nome.addEventListener('keyup', ()=>{
    if(nome.value.length <= 5){
        labelNome.setAttribute('style', 'color:red')
        /* labelNome.innerHTML = 'Nome Completo *Insira no mínimo 5 caracteres' */
        nome.setAttribute('style', 'border-color:red')
        validNome = false
    }else{
        labelNome.setAttribute('style', 'color:green')
        /* labelNome.innerHTML = 'Nome Completo' */
        nome.setAttribute('style', 'border-color:green')
        validNome = true
    }
})

curso.addEventListener('keyup', ()=>{
    if(curso.value.length <= 3){
        labelCurso.setAttribute('style', 'color:red')
        curso.setAttribute('style', 'border-color:red')
        validCurso = false
    }else{
        labelCurso.setAttribute('style', 'color:green')
        curso.setAttribute('style', 'border-color:green')
        validCurso = true
    }
})

usuario.addEventListener('keyup', ()=>{
    if(usuario.value.length <= 5){
        labelUsuario.setAttribute('style', 'color:red')
        usuario.setAttribute('style', 'border-color:red')
        validUsuario = false
    }else{
        labelUsuario.setAttribute('style', 'color:green')
        usuario.setAttribute('style', 'border-color:green')
        validUsuario = true
    }
})

senha.addEventListener('keyup', ()=>{
    if(senha.value.length <= 4){
        labelSenha.setAttribute('style', 'color:red')
        senha.setAttribute('style', 'border-color:red')
        validSenha = false
    }else{
        labelSenha.setAttribute('style', 'color:green')
        senha.setAttribute('style', 'border-color:green')
        validSenha = true
    }
})

confirmaSenha.addEventListener('keyup', ()=>{
    if(senha.value != confirmaSenha.value){
        labelConfirmaSenha.setAttribute('style', 'color:red')
        labelConfirmaSenha.innerHTML = 'Senhas não conferem'
        confirmaSenha.setAttribute('style', 'border-color:red')
        validConfirmaSenha = false
    }else{
        labelConfirmaSenha.setAttribute('style', 'color:green')
        labelConfirmaSenha.innerHTML = 'Confirmar Senha'
        confirmaSenha.setAttribute('style', 'border-color:green')
        validConfirmaSenha = true
    }
})

function cadastrar(){
    if(validNome && validCurso && validUsuario && validSenha && validConfirmaSenha){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
            {
                nomeCadastrado: nome.value,
                cursoMatriculado: curso.value,
                userCad: usuario.value,
                senhaCadastrada: senha.value
            }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        msgSucesso.setAttribute('style', 'display:block')
        msgSucesso.innerHTML = '<strong>Cadastrado com sucesso</strong>'
        msgErro.innerHTML = ''
        msgErro.setAttribute('style', 'display:none')
        setTimeout(()=>{
            window.location.href = 'index.html'
        },4000)
       
    }else{
        msgErro.setAttribute('style', 'display:block')
        msgErro.innerHTML = '<strong>Preencha tudo</strong>'
        msgSucesso.innerHTML = ''
        msgSucesso.setAttribute('style', 'display:none')
    }
}

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type', 'password')
    }
})

btnConfirma.addEventListener('click', ()=>{
    let inputConfirmaSenha = document.querySelector('#confirmaSenha')

    if(inputConfirmaSenha.getAttribute('type') == 'password'){
        inputConfirmaSenha.setAttribute('type', 'text')
    }else{
        inputConfirmaSenha.setAttribute('type', 'password')
    }
})

