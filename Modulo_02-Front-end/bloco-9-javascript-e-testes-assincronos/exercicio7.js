const pokemons = [
    {
      name: 'Bulbasaur',
      type: 'Grama',
      ability: 'Raio Solar',
    },
    {
      name: 'Charmander',
      type: 'Fogo',
      ability: 'Lança Chamas',
    },
    {
      name: 'Squirtle',
      type: 'Água',
      ability: 'Jato de Água',
    },
  ];
  
  function getPokemonDetails(selectedPokemon, callback) {
    const foundPokemon = pokemons.find((pokemon) => pokemon.name === selectedPokemon);
  
    setTimeout(() => {
      if (foundPokemon === undefined) {
        return callback(new Error('Não temos esse pokémon para você :('), null);
      }
  
      const { name, type, ability } = foundPokemon;
  
      const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;
  
      callback(null, messageFromProfOak);
    }, 2000);
  }
  
  const handlePokemonSearch = (error, message) => { // esta é a callback de getPokemonDetails!
    if (error) {
        console.log(error); //imprimir mensagem de erro caso o pokemon não seja encontrado
    } else {
        console.log(message) // imprimir msg do professor carvalho se houver o pokemon
    }

  };
  // o papel da callback handlePokemonSearch é basicamente imprimir mensagens. A mensagem pode ser de erro(error), ou sucesso (message)
  // Acredito que dá para fazer getPokemonDetails imprimir msgs sem a necessidade de uma callback, apenas com return. testar depois
  
  getPokemonDetails(/* selectedPokemon*/, handlePokemonSearch);