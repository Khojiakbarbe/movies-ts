export const LocalMode = (): boolean => {
    const localMode: string | null = localStorage.getItem('mode')
    if (localMode) {
        return JSON.parse(localMode)
    } else {
        return true
    }

}
