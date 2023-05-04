
import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./PokemonSlice";


export const getPokemons = ( page = 0 ) => {

    return async ( dispatch, getState ) => {

        dispatch( startLoadingPokemons() );

        //TODO: realizar peticion http

        const { data } = await pokemonApi.get(`pokemon?limit=10&offset=${ page * 10 }`);

        data.results.map( p => {
            console.log(p.name);
        });
        console.log('');

        dispatch( setPokemons({ pokemons: data.results, page: page + 1 }) );

    };
};