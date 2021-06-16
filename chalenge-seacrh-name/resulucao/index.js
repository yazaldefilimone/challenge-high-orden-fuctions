const { shopping } = require('../data/data')

// 1. Procure um produto com o Nome 'Pao'
var ItemSearch = "Pao";
const Shop = shopping.reduce( (ecc, item ) => {
  if(item.produto.toLowerCase() == ItemSearch.toLowerCase()){
    ecc.push(item)
  }
  return ecc
},[]);

console.table(Shop);

