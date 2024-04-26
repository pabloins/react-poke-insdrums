import React from "react";
import NavigationBar from "./NavigationBar";
import { renderWithProviders } from "../../testUtils/renderWithProviders";

describe("NavigationBar", () => {
    it('should render without error', () => {
        renderWithProviders(<NavigationBar />)
    })

    it('should render the logo', () => {
        const { getByAltText } = renderWithProviders(<NavigationBar />);
        expect(getByAltText("Poke Logo")).toBeInTheDocument();
    })

    it('should render the navigation links', () => {
        const { getByText } = renderWithProviders(<NavigationBar />)
        expect(getByText("Pokedex")).toBeInTheDocument()
        expect(getByText("Favorite")).toBeInTheDocument()
    })

    it('should render the search button', () => {
        const { getByRole } = renderWithProviders(<NavigationBar />);
        const searchButton = getByRole("button", { name: "Search" });
        expect(searchButton).toBeInTheDocument();
    })    
})
