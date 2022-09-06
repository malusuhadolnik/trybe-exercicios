// // 1. crie um algoritmo que retorne o fatorial de 10. Resultado esperado: 3628800
// let resultado = 1;
// for (let index = 1; index < 10; index += 1) {
//   resultado += index * resultado
// }
// console.log(resultado);

//2. Desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
//posso ler da esquerda para direita, e  armazenar ao contrário em uma nova variável, e depos imprimir;
//posso já ler ao contrário, armazenar em uma nova variável e imprimir

// let word = 'querocafe';
// let reverseWord = '';

// for (let index = 0; index < word.length; index += 1) {   
//   reverseWord += word[word.length - 1 - index]; 
// }
// console.log(reverseWord);

// (word.lenght -1) estabelece o último índice da string word,é uma constante; e a subtração (word.lenght -1) - index fala pra fazer o seguinte: pegar a última posição, que é fixa, e subtrair pelo índex, que é uma variável que irá mudar a cada iteração. por exemplo: para a palavra tryber, quando o índice for = 2, ele vai subtrair 2 (o index da vez) de 5, que é o último índice da palavra. Então assim temos que ele lerá a letra B da palavra tryber, e assim por diante. 


//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let ehmaior = array[0]; // aqui se estabelce que nossa comparação será com o primeiro elemento da array
// for (let index = 0; index < array.length; index +=1){
//     if (array[index].length > ehmaior.length) { //se o tamanho da palavra da vez for maior que o tamanho da palavra inicial da variável
//         ehmaior = array[index]; //sobrescrevê-la com a palavra da vez.
//     }
// } // a cada iteração, a comparação do tamanho dos índices é feita par a par, sendo a variável "ehmaior" atualizada toda vez que o índice da vez for maior que o anterior. 
// console.log(ehmaior);
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let ehmenor = array[0];
// for (let index = 0; index < array.length; index +=1){
//     if (array[index].length < ehmenor.length){
//         ehmenor = array[index];
//     }
// }
// console.log(ehmenor);

//Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50. A resposta deve ser 47.

// let maiorprimo = 2;
// let ehprimo = null;
// for (let index = 2; index <= 50; index += 1){
//     if (index % index === 0){ //o err está aqui. ele tem que ser divisível APENAS por por 1 e ele mesmo, e o que esta linha faz é retornar todos os números, inclusive não primos, que são divisíveis por ele mesmo. Ex.: 50 é divisível por ele mesmo, por 1, mas tm por 2. 
//         // preciso criar uma forma de definir que o número atual só pode ser dividido por 1 ou por ele mesmo, e não por outros números.
//         ehprimo = index;
//         if (ehprimo > maiorprimo){
//             maiorprimo = ehprimo;
//                 }
     }
}
console.log(ehprimo);

//Segue abaixo a resolução e a minha interpretação:
let biggestPrimeNumber = 0;

for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}
// primeira coisa, que fiz no meu código tb, é estabelecer uma variável para armazenar qual é o maior número primo. Mas agora todo o resto é diferente kkk.Seguinte: o que precisamos fazer para descobrir se um número é primo é divir este número "X" por divisores "Y", e verificar o resto desta operação. O número X será primo APENAS se o divisor for 1 ou X. Em todas as outras situações, se esta divisão der igual á zero, então número primo = FALSO. Então o que é feito nas próximas linhas é estabelecer quem é X, quem é Y, e fazer esta divisão. Como existe uma grande quantidade de números que temos que testar (divisores de 2 a 50 e dividendos de 1 a 50), par a par, o melhor é criar um loop para que haja a iteração entre estes números. portanto criamos uma estrutura for tanto para iteração dos números X (currentNumber) quanto do Y (currentDivisor). Outro pulo do gato é construir esta estrutura de forma que ela deixe de fora os casos em que a divisão indica um número primo, para que o resultado dẽ número primo = falso. Para isso deixamos de fora do currentDivisor o número 1, começando a contar a partir do 2, e o número atual, estabelecendo que o divisor tem que ser MENOR que o número atual. nesta situação, todas as outras divisões com resto = 0 são de um X que NÃO É PRIMO. A lógica resumida é até simples: se a divisão de um número primo (X) por Y = 0 apenas se Y =1 ou Y = X, a divisão de X por qualquer outro número neste intervalo não é igual à zero. Se der zero, então o número não é primo. Então após a divisão, o loop continua: se o número for primo, a gente pede para que a variável biggestPrimeNumber, que armazena o resultado, seja atualizada com o número da iteração atual. se não for primo, daí ele permanece com valor do último primo encontrado. 