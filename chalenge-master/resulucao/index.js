const { search } = require('../data/data');
/*
  * Ultimo Chalenge!!
  * Procure o Nome/s que e sao POLIDROMOS
 */


// Help!!!
// POLIDROMOS = sao palavras(nomes) que podem ser lidas de frente para tas sem peder o sentido!!!

const POLIDROMO = search.filter( item =>item.toLowerCase() == item.toLowerCase().split('').reverse().join(''))
console.table(POLIDROMO)
