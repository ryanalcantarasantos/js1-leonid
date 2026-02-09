'use strict'

const botaoTrocaCor = document.getElementById("botao-trocar-cor")
const trocarVerde = document.getElementById("trocar-verde")
const trocarVermelho = document.getElementById("trocar-vermelho")


function trocaCor() {
    const corUsuario = document.getElementById("cor-usuario").value
    document.documentElement.style.setProperty("--color-bg", corUsuario)
}

botaoTrocaCor.addEventListener('click', trocaCor)

function TrocarVerde(){
    document.documentElement.style.setProperty("--color-bg", 'green')

}

trocarVerde.addEventListener('click', TrocarVerde )

function TrocarVermelho(){
    document.documentElement.style.setProperty("--color-bg", 'red')

}

trocarVermelho.addEventListener('click', TrocarVermelho )