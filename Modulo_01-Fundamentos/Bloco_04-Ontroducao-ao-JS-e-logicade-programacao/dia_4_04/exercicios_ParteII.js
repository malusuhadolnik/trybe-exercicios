
//Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
function verificaPalindrome(word){ 
    let reverseWord = '';
    for (let index in word) { 
        reverseWord += word[word.length - 1 - index]; 
    }
    
    if (reverseWord === word){
        return true;
    } else {
        return false;
    }
}

console.log(verificaPalindrome("ovo")); 

//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
function indiceDoMaiorNumero(arrayDeNumeros) {
    let indiceMaior = 0;
    for (let indice in arrayDeNumeros) {
      if (arrayDeNumeros[indiceMaior] < arrayDeNumeros[indice]) {
        indiceMaior = indice;
      }
    }
    return indiceMaior;
  }

  //3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
  function indiceDoMenorValor(num){
    menorIndice = 0;
    for(let index in num){
        if ( num[menorIndice] > num[index]){
            menorIndice = index;
        }
       }
   return menorIndice;     
  }
  
  console.log(indiceDoMenorValor([2, 4, 6, 7, 10, 0, -3]));

  //4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
function maisCaracteres(arrayDeNomes) {
    let maiorNome = arrayDeNomes[0];
    for (let indice in arrayDeNomes) {
               if (maiorNome.length < arrayDeNomes[indice].length){
            maiorNome = arrayDeNomes[indice];
        }
    }
    return maiorNome;
  }
console.log(maisCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));