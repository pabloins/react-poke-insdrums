import { useParams } from "react-router"
import useGetPokemonListByType from "../../hooks/useGetPokemonListByType";
import { Grid } from "../shared/Grid/Grid";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import React from "react";

export const PokemonByTypeList = () => {
    const { typeName } = useParams();
    const { pokemonList } = useGetPokemonListByType(typeName ?? '');

    return (
        <Grid>
            {pokemonList?.map((pokemon) => <PokemonCard key={pokemon?.pokemon.name} pokemon={pokemon?.pokemon} />)}
        </Grid>
    )
}