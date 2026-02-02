'use strict'

const botaoTrocarCor = document.getElementById('botao-trocar-cor')
const botaoTrocarVerde = document.getElementById('botao-trocar-verde')
const botaoTrocarVermelho = document.getElementById('botao-trocar-vermelho')

function trocarCor () {
    const corUsuario = document.getElementById('cor-usuario').value
    document.documentElement.style.setProperty('--color-bg', corUsuario)
}

botaoTrocarCor.addEventListener('click', trocarCor)