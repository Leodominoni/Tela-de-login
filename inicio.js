let userLogado = JSON.parse(localStorage.getItem('userLogado'))
let logado = document.querySelector('#logado')

logado.innerHTML = `Bem vindo(a) ${userLogado.nome}`

if(localStorage.getItem('token' == null)){
    alert('Você precisar estar logado')

}

function sair(){
    localStorage.removeItem('token')
    localStorage.removeItem('userLocado')   

}