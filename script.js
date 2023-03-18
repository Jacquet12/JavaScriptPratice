console.log("Seja bem vindo")
// para fazer comentário em linha
/*para fazer comentário em blog
*/


// como declarar string
console.log('Jacquet')
console.log(1 + 1)

console.log({
    nome: 'James',
    idade: 20,
    peso: 80,
    andar: function(){
        console.log('Andar')
    }
})

//declaration of vaviavél
var nameF 
nameF = 'Jacquet'
//assignment

//que tipo de dado foi colocado na variavél?
console.log(typeof nameF)

var age, isHuman

age = 20
isHuman = true

// concatenando

console.log('Age = ' + age +'  Boolean = ' +isHuman)
console.log(`Jacquet tem ${age}`)

// template

var a = 5;
var b = 10;
console.log(`Quinze é ${a + b} e
não ${2 * a + b}.`);

console.log(`Quatorze é ${a}`)
 // criando um ojeto
const person ={
    nome : 'Jacquet',
    idade : 24,
    peso : 18.6
}


console.log( `${person.nome} tem ${ person.idade} anos\n ${person.peso} kg de peso`)

//arrays

const animal =[
    'Cachorro',
    'Gato',
    'Elefante'
]


console.log(`1) ${animal[0]}.`)
console.log(`2) ${animal[1]}.`)
console.log(`3) ${animal[2]}.`)
console.log(`Lentgh: ${animal.length}`)

// colocar um objeto dentro de um array

 const animals = [
    'Cachorro',
    'Gato',
    'Elefante',
    {
    nome: 'Gato',
    idade: 2,
    peso: 10}
]

console.log(`${animals[0]}`)
console.log(`${animals[3].nome}`)
console.log(`${animals[3].idade}`)
console.log(`${animals[3].peso}`)








