const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];
//🚀 6- Para o próximo exercício você deve criar um novo array de objetos a partir das informações das constantes students e grades, onde cada objeto desse novo array terá o formato { name: nome do aluno, average: media das notas }. Para isso vamos assumir que a posição do index 0 de grades refere-se ao estudante na posição de index 0 de students. Para resolver este exercício, além de reduce, será necessário utilizar também a função map. Dica: Você pode acessar o index do array dentro de map, e você pode ver o objeto esperado na constante expected.

//para calcular média, usar REDUCE

function studentAverage() {
   return students.map((element, index) => {
     return { name: element, average:(grades[index].reduce((acc, curr) => acc + curr, 0) / grades[index].length), }
    })
}


console.log(studentAverage());

// const expected = [
//   { name: 'Pedro Henrique', average: 7.8 },
//   { name: 'Miguel', average: 9.2 },
//   { name: 'Maria Clara', average: 8.8 },
// ];

// function containsA() {
//     return names.reduce((acc, currWord) => //segundo loop: iteração sobre índices da array
//        acc + currWord.split('').reduce((acumulator, currLetter) => { //primeiro loop:iteração sobre string
//           if (currLetter === 'a' || currLetter === 'A') return acumulator + 1;
//           return acumulator;
//        }, 0), 0);
//   }