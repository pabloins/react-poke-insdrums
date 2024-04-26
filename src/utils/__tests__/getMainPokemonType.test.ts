import { PokemonData, PokemonType } from "../../interfaces/PokemonData";
import { getMainPokemonType } from "../getMainPokemonType";

describe("getMainPokemonType", () => {
    it("should return the first type if there are many types", () => {
        const PokemonData: PokemonData = {
            types: [
                {
                    slot: 1,
                    type: {
                        name: "fire",
                        url: "https://pokeapi.co/api/v2/type/10/"
                    },
                },
                {
                    slot: 2,
                    type: {
                        name: "water",
                        url: "https://pokeapi.co/api/v2/type/11/"
                    },
                },
            ],
            name: "",
            id: 0,
            height: 0,
            weight: 0,
            sprites: {
                front_default: "",
                back_default: "",
                front_shiny: "",
                back_shiny: ""
            },
        }
        expect(getMainPokemonType(PokemonData)).toBe("fire")
    })
})