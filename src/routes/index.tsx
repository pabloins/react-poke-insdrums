import React from 'react'
import { Route, Routes } from 'react-router-dom'

const Pokedex = React.lazy(() => import('../views/Pokedex'))
const PokemonProfile = React.lazy(() => import('../views/PokemonProfile'))
const PokemonByType = React.lazy(() => import('../views/PokemonType'))
const PokemonByFavorite = React.lazy(() => import('../views/PokemonByFavorite'))

const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <Pokedex />
                    </React.Suspense>
                }
            />
            <Route
                path="/pokemon/:pokemonName"
                element={
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <PokemonProfile />
                    </React.Suspense>
                }
            />
            <Route
                path="/type/:typeName"
                element={
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <PokemonByType />
                    </React.Suspense>
                }
            />
            <Route
                path="/favorite"
                element={
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <PokemonByFavorite />
                    </React.Suspense>
                }
            />
        </Routes>
    )
}

export default AppRoutes
