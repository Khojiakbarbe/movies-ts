import { Data } from "../interfaces/data"

export const LocalMode = (): boolean => {
    const localMode: string | null = localStorage.getItem('mode')
    if (localMode) {
        return JSON.parse(localMode)
    } else {
        return true
    }
}




export const LocalFavorites = (): Data[] | [] => {
    const favorites: string | null = localStorage.getItem('favorites')
    if (favorites) {
        return JSON.parse(favorites)
    } else {
        return []
    }
}