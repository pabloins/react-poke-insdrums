import { create } from "zustand";

// 5,6,7,8

// ["5", "6, "7", "8"]

interface FavoriteStore {
    favorites: string[];
    addFavorite: (id: string) => void;
    removeFavorite: (id: string) => void;
}

export const useFavoriteStore = create<FavoriteStore>((set) => ({
    favorites: localStorage.getItem("favorite-pokemons")?.split(",") || [],
    addFavorite: (id: string) => set((state) => {
        const favorites = [...state.favorites, id];
        localStorage.setItem("favorite-pokemons", favorites.join(","));
        return { favorites };
    }),
    removeFavorite: (id: string) => set((state) => {
        const favorites = state.favorites.filter((favorite) => favorite !== id);
        localStorage.setItem("favorite-pokemons", favorites.join(","));
        return { favorites };
    })
}));