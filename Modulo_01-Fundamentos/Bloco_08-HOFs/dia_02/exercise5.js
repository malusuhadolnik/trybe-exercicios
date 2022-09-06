const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
//🚀 5 - Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário. 1901 -2000
// Dicas que a questão dá: 
// o retorno precisa ser BOOLEANO; 
// a condição deve ser atendida por TODOS os elementos 
function everyoneWasBornOnSecXX() {
  return books.every(element => element.author.birthYear > 1900 && element.author.birthYear < 2001)
  }
console.log(everyoneWasBornOnSecXX());

//será que dá pra resolver com forEach?
function testeComForEach(){
    let armazenamento;
    books.forEach((element) => {
        if (element => element.author.birthYear > 1900 && element.author.birthYear < 2001){
        armazenamento = true;
        } armazenamento = false;
    })
    return armazenamento;
};

console.log(testeComForEach()); // false. funciona também :)