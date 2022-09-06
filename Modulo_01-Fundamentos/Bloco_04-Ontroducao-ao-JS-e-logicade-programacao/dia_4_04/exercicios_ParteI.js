//Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:Bem-vinda, Margarida

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

//console.log("Bem-vinda, " + info.personagem);

//2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.

info["Recorrente"] = "Sim";
//console.log(info);

//3. Faça um for/in que mostre todas as chaves do objeto. 
//for (let keys in info){
   // console.log(keys)
//}

//Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto
for (let keys in info){
    console.log(info[keys]);
}

//--------------------------//
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

//6 - Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

//console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome  + " se chama " + leitor.livrosFavoritos[0].titulo);

//7 - Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a esta chave um objeto contendo as seguintes informações:
leitor.livrosFavoritos.push(
    {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
      }
);

console.log(leitor);

//8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".
console.log("Júlia tem dois livros favoritos: " + leitor.livrosFavoritos[0].titulo + " e " + leitor.livrosFavoritos[1].titulo)