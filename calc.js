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


const botaoDiv = document.getElementById('div')

function divisao () {
    const num1 =  Number(document.getElementById('n1').value)
    const num2 = Number(document.getElementById('n2').value)
    const result = document.getElementById('resultado')

    result.textContent = num1 / num2 
}

botaoDiv.onclick = divisao


const botaoMult = document.getElementById('mult')

function multiplicacao () {
    const num1 =  Number(document.getElementById('n1').value)
    const num2 = Number(document.getElementById('n2').value)
    const result = document.getElementById('resultado')

    result.textContent = num1 * num2 
}

botaoMult.onclick = multiplicacao

