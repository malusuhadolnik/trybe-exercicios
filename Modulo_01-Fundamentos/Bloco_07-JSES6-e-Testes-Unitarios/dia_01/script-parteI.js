//Exercicio 1
//Antes:
// function testingScope(escopo) {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);

//Depois
  // const testingScope = escopo => {
  //   if (escopo === true) {
  //     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
  //     ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
  //     console.log(ifScope);
  //   } else {
  //     let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
  //     console.log(elseScope);
  //   }
  // }
  // testingScope(true);

  //Exercício 2:Crie uma função que retorne um array em ordem crescente.
  // const oddsAndEvens = [13, 3, 4, 10, 7, 2];
  // const sortOddsAndEvens = () => { 
      // Seu código aqui.
  // };

  // console.log(oddsAndEvens); // será necessário alterar essa linha 😉

//Teste com a função como já conheço
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const teste = oddsAndEvens.sort(function(a, b){return a- b;});
console.log(teste); //Funciona: [ 2, 3, 4, 7, 10, 13 ]

//Teste com arrow function
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const teste2 = oddsAndEvens.sort((a, b) => a - b);
console.log(`Os números ${teste2} se encontram ordenados de forma crescente!`); //Funciona: [ 2, 3, 4, 7, 10, 13 ]

//Explicação sobre a função SORT e a função de comparação que passei pra ela.

//A função sort vai ordenar os elementos na array em ordem alfabética. No caso de números com mais de uma casa decimal, ela vai considerá-lo uma string: 10 se torna 1+0, de forma que nesse caso a ordenação [3, 10, 2] resultará em [10,2,3]. Como solucionar este problema?

//Para isso, passamos para a função array.sort() uma outra função, chamada de Compare Function, que tem a seguinte notação: function(a, b){return a - b}; em que "a" é o primeiro número e "b" o segundo na comparação par a par dentro do array. Não é necessário declarar quem é a ou b, a função já "sabe". Daí a ordenação ocorre de acordo com o resultado de a-b: se o resultado for negativo (ex: 3 -10 = -7), a vem antes de b. Já se o resultado for positivo (3-2 =1), b vem antes de a.

//Referências: https://www.youtube.com/watch?v=nq0DC5M3Kc8; http://www.javascriptkit.com/javatutors/arraysort.shtml; https://www.w3schools.com/js/js_array_sort.asp




