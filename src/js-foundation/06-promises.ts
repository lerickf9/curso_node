
const { http } = require('../plugins');

export const getPokemonId = async (id: string | number ): Promise<string> =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;
    
    const pokemon = await http.get(url);

    // const resp = await fetch( url );
    // const pokemon = await resp.json();

    // throw new Error('Pokemon no existe');

    return pokemon.name;

    // .then( ( resp ) => resp.json())
    // .then ((pokemon) => pokemon.name);

    // return 'Pokemon'
}
