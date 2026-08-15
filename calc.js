'use strict'

const botaoAdd = document.getElementById('plus')

function soma () {
    const num1 =  Number(document.getElementById('n1').value)
    const num2 = Number(document.getElementById('n2').value)
    const result = document.getElementById('resultado')

    result.textContent = num1 + num2 
}

botaoAdd.onclick = soma


const botaoSub = document.getElementById('sub')

function subtraçao () {
    const num1 =  Number(document.getElementById('n1').value)
    const num2 = Number(document.getElementById('n2').value)
    const result = document.getElementById('resultado')

    result.textContent = num1 - num2 
}

botaoSub.onclick = subtraçao





