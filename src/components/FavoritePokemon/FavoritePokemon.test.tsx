import React from "react";
import { FavoritePokemon } from "./FavoritePokemon";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import { useFavoriteStore } from "../../store/useFavoriteStore";

jest.mock("../../store/useFavoriteStore", () => ({
    useFavoriteStore: jest.fn()
}));

describe("FavoritePokemon", () => {
    afterEach(() => jest.clearAllMocks());

    it("should render PokemonCards for each Favorite Pokemon", () => {
        const favoriteIds = ["1", "2", "3"];
        (useFavoriteStore as unknown as jest.Mock).mockReturnValue(favoriteIds);

        const { getAllByTestId } = renderWithProviders(<FavoritePokemon />);

        const pokemonCards = getAllByTestId("pokemon-card");
        expect(pokemonCards).toHaveLength(favoriteIds.length);
    });
});
