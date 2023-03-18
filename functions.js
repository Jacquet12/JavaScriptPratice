console.log('Aula sobre functions')

let c, d
a = 5
b = 10

function soma(a, b) {
    return a + b
}

console.log(`SOMMA = ${soma(c, d)}`)

//criar um aplicativo de frases motivacionais

//declaration of function
// function statement

function creatPhrases(){
    console.log('Estudar é muito bom!')
    console.log('Paciência é percistencia')
    console.log('Revisão é mãe do aprendizado!')
}

//executar o ódigo

creatPhrases()
console.log('Fim do programa!')
creatPhrases()
creatPhrases()
creatPhrases()

//function expressions
//function anonymous

sum = function(number1, number2){
    console.log(number1 + number2)
}

sum(10, 15)

//parameters
sum = function(number1, number2){
    soma = number1 + number2
    return soma
}

let number1 = 30
let number2 = 40

console.log(`O número 1 é : ${number1}`)
console.log(`O número 2 é : ${number2}`)
console.log(`A somma é : ${sum(number1, number2)}`)
