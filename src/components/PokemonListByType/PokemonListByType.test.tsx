import React from 'react'
import { useParams } from 'react-router-dom'
import { PokemonByTypeList } from './PokemonListByType'
import useGetPokemonListByType from '../../hooks/useGetPokemonListByType'
import { renderWithProviders } from '../../testUtils/renderWithProviders'

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn(),
}))

jest.mock('../../hooks/useGetPokemonListByType', () => jest.fn())

describe('PokemonListByType', () => {
    beforeEach(() => {
        (useParams as jest.MockedFunction<typeof useParams>).mockReturnValue({ typeName: 'fire' })
        ;(useGetPokemonListByType as jest.Mock).mockReturnValue({
            pokemonList: [
                { pokemon: { name: 'Charmander' } },
                { pokemon: { name: 'Charizard' } },
            ],
        })
    })

    afterEach(() => jest.clearAllMocks())

    it('should render a list of PokemonCards', () => {
        const { queryAllByTestId } = renderWithProviders(<PokemonByTypeList />)
        expect(queryAllByTestId('pokemon-card')).toHaveLength(2)
    })
})
