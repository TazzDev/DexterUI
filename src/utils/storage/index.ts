"use client";
const storeTokenInLocalStorage = (token: string): boolean => {
    if (localStorage) {
        localStorage.setItem('access-token', token)
        return true
    }
    return false
}

export {storeTokenInLocalStorage}