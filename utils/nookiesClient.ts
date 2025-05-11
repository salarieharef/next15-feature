import nookies from 'nookies'

export const setCookie = (key: string, value: string) => {
    nookies.set(null, key, value, {
        path: '/',
        maxAge: 3600
    })
}

export const getCookie = (key: string) => {
    // return nookies.get(null, key)

    // or
    const cookies = nookies.get(null)
    return cookies[key]
}

export const deleteCookie = (key: string) => {
    nookies.destroy(null, key)
}

export const getAllCookies = () => {
    return nookies.get()
}

