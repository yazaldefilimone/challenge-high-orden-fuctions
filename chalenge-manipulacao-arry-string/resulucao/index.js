const { criacas ,search, email, shopping }  = require("../data/data");
// 1. adicione o ano de naicimento de cada uma das  criancas() para um arry;

var anos;  // variavel que vai conter os anos das criacas;
const Response = criacas.map(idade=> { // precorendo a lista da criacas e o item contem a idade de cada criaca
  for(let index = 0;index < 2020; index++){
    let Tstring = `${index - 2020}` // trasforando  o resultado da subtracao numa string
    if(+Tstring.split('-')[1] === idade ){ // separando o '-' do numero e trasforando a string em inteiro e verificando se e ingual a idade
        anos = index //adicionando a idade que e ingual a idade da criaca
    }
  }
  return { idade, anos }
})
console.table(Response);
// 2.crie um arry somente com os dominius do emails

const emailSplit = email.map( item => item.split('@')[1]) //precore o arry e no item faco o split e separo no @;

console.table(emailSplit)

// 3. encotre o maior numero dos precos abaixo dos 100
const precoFilter = shopping.filter(item => item.preco < 100 ); // filtro os produtos e verifico se o preco do mesmo e menor que 100 e o filter retorna os produtos que teve como return true

console.table(precoFilter);
