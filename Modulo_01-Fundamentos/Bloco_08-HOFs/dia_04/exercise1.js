const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
// 1 - Dada uma matriz, transforme em um array. Usar reduce
  function flatten() {
    return arrays.reduce((acc, curr) => acc.concat(curr), []);
  };

console.log(flatten());
//aqui a gente usa o reduce porque quer como saída um único elemento
// mas quem junta as arrays em uma única é o método concat
//
