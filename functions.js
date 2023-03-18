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

//errow de function

const sayMyName = () =>{
    console.log('Jacquet Lemé!!!')
}

sayMyName()

//callBack function

function saymyName(name) {
    console.log(name)
}

saymyName('Jacquet-L')

//function construtor

function person(name){
    this.name = name
    this.walk = function(){
        return "Andando"
    }
}

const john = new person('John')
const Jacquet = new person('Jacquet')
console.log(john)
console.log(john.name)

//this keyboard
console.log(Jacquet.walk())
console.log(`${Jacquet.name} ${Jacquet.walk()}`)


//prototype : coisas que  já foram existidas previamente

//Type conversion (typecasting) vs Type coersion

//alteração de um tipo de dados para outros

console.log(Number('9')+ 5)// nesse caso ele converte o string em numero dai no caso o resultado vai ser 14


//transformar string em numero e numero em string

let string = '123'
console.log(Number(string))

let number = 123

console.log(String (number))

// contar quantas letras que tem uma palavra e quantos dígitos tem um numero

let palavra = 'paralelepipedro'
let numero = 120000

console.log('contar quantas letras que tem uma palavra ')

console.log(palavra.length)
console.log(String(numero).length)

//como limitar o numero de casos decimais

let numbe = 200.4657

console.log(numbe.toFixed(2).replace('.' ,','))


//transfrmar letras maiúscula em minuscula e virce verca

let nome = 'Jacquet Lemé'

console.log(nome.toUpperCase())
console.log(nome.toLowerCase())
console.log(nome.charAt(0))

//manipulando string e arrays

let FullName = 'Jacquet Lemé'

console.log(FullName.split(' '))
console.log(FullName.split(' '))
console.log(FullName.split(' '))

let phrase = 'Eu quero viver o amor!!!'
let myArray = phrase.split(" ")
let phrasWithAnderscore = myArray.join("_")
console.log(phrasWithAnderscore)

//verificar se o texto contem a palavra amor

console.log(phrase.includes("Amor"))

//criar array com construtor

let myArray2 = new Array(10)
console.log(myArray2)
console.log(myArray2.length)

//transformar uma cadeia de caracteres em elemento de um array

let myArray3 = "Manipulação"

console.log(Array.from(myArray3))

// addicionar um item no fim
let techs = ["html","css","js"]
 techs.push("java")

 console.log(techs)
// addicionar um item no comeco

 techs.unshift("python")
 console.log(techs)

 //remover no final
 techs.pop()
 console.log(techs)

 //remover no inicio
 techs.shift()
 console.log(techs)

 //remover um item
 techs.splice(1,1)
 console.log(techs)

 //remover um item em qualquer lugar do arrays
 techs.splice(1,2)
 console.log(techs)

 //encontrar a posição de um elemento em um array
 console.log(techs.indexOf("js"))
 console.log(techs.lastIndexOf("js"))
 console.log(techs.includes("js"))
 console.log(techs.includes("css"))
 console.log(techs.includes("html"))
 console.log(techs.includes("java"))
 console.log(techs.includes("python"))
 console.log(techs.includes("js"))
 console.log(techs.includes("css"))
 console.log(techs.includes("html"))
 console.log(techs.includes("java"))
 console.log(techs.includes("python"))
 console.log(techs.includes("js"))
 console.log(techs.includes("css"))
 console.log(techs.includes("html"))
 console.log(techs.includes("java"))


