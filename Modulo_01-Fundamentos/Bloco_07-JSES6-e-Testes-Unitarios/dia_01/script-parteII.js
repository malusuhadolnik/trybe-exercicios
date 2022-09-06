//Exercício 1: Crie uma função que receba um número e retorne seu fatorial.
const factorial = (n) => {
  let resultado = 1;
  for (let index = 1; index <= n; index ++){
    resultado = index*resultado;
  };
  return resultado;
};

console.log(`Esse é o fatorial ${factorial(4)}`);

//Exercício 2: Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.
//function longestWord (frase){}
const longestWord = frase => {
  let text = frase;
  const myArray = text.split(" ");  

  let maiorPalavra = myArray[0];
  for (let index =0; index < myArray.length; index ++){
      if (maiorPalavra.length < myArray[index].length){
        maiorPalavra = myArray[index];
      };
    };
  return maiorPalavra;
};

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

//Exercício 4.1 Função 1: Escreva uma função que substitua a letra 'x' em uma frase.
const substituaX = nome => {
  const frase = 'Tryber x aqui!';
  const fraseToArray = frase.split(" ");
  
  const olar = `${fraseToArray[0]} ${nome} ${fraseToArray[2]}`;
  return olar;
};

//console.log(substituaX("Maria"));

//Exercício 4.2: Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.
//O nome da função deverá ser minhasSkills;
//A função deverá receber o retorno da Função 1 - substituaX por parâmetro;
//Declare dentro da função uma variável com o nome skills, do tipo const;
//A variável skills deverá ser um array contendo três strings com tecnologias que você já aprendeu.
//Crie uma varável do tipo let e concatene o valor retornado da Função 1 - substituaX (utilize template literals), a frase 'Minhas três principais habilidades são:' e o valor da variável skills.

const minhasSkills = (paramEhSubstituaXnome) => {
    const skills = ["HTML", "CSS", "JS"];
    let concat = `${paramEhSubstituaXnome}\nMinhas três principais habilidades são:\n-${skills[0]}\n-${skills[1]}\n-${skills[2]}`;
    return concat;

}

console.log(minhasSkills(substituaX("Maria")));















