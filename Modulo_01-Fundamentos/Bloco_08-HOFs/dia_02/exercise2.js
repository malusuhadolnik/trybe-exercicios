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
  
//Retorne o nome do livro de menor nome. Dica: use a função forEach.
function smallerName() {
    let nameBook; //variável de armazenamento sem valor definido, console.log(typeof nameBook) retorna "undefined"  
    books.forEach( (element) => {
        if (!nameBook || element.name.length < nameBook.length) {
            nameBook = element.name
    } } )
    return nameBook;
  }
  console.log(smallerName());

// É preciso colocar a condição !nameBook porque na primeira iteração seu valor é UNDEFINED, e isso buga o código porque a gente pede pra comparar o tamanho de element.name com uma coisa que não existe. Como para o javascript undefined = false, o operador ! tá falando que namebook = true, então ela existe sim, logo dá para continuar a função.
