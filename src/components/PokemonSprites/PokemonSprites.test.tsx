import React from "react"
import { renderWithProviders } from "../../testUtils/renderWithProviders"
import { PokemonSprites } from "./PokemonSprites"
import { useGetPokemon } from "../../hooks/useGetPokemon"

jest.mock("../../hooks/useGetPokemon", () => ({
    useGetPokemon: jest.fn()
}))

describe("PokemonSprites", () => {
    afterEach(() => jest.clearAllMocks())

    it("should render all four pokemon sprites", () => {
        (useGetPokemon as jest.Mock).mockReturnValue({
            pokemonData: {
                sprites: {
                    front_default: "front_default",
                    back_default: "back_default",
                    front_shiny: "front_shiny",
                    back_shiny: "back_shiny",
                },
                name: "Pikachu",
            }
        })
    
        const { queryAllByAltText } = renderWithProviders(<PokemonSprites />)
        const pikachuSprites = queryAllByAltText("Pikachu")
        expect(pikachuSprites.length).toBe(4)
        pikachuSprites.forEach((sprite) => {
            expect(sprite).toBeInTheDocument()
        })
    })
    
})
