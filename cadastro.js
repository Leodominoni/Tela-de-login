let btn = document.querySelector('#verSenha')

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type', 'password')
    }
})

let btnConfirma = document.querySelector('#verConfirmaSenha')
btnConfirma.addEventListener('click', ()=>{
    let inputConfirmaSenha = document.querySelector('#confirmaSenha')

    if(inputConfirmaSenha.getAttribute('type') == 'password'){
        inputConfirmaSenha.setAttribute('type', 'text')
    }else{
        inputConfirmaSenha.setAttribute('type', 'password')
    }
})