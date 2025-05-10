export const setCookieClient = (key: string, value: string) => {
    document.cookie = `${key}=${value}; path=/; max-age=3600`; 
}

export const getCookieClient = (key: string) => {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    const cookie = cookies.find(c => c.startsWith(`${key}=`));
    return cookie ? cookie.split('=')[1] : null;
}

export const deleteCookieClient = (key: string) => {
    document.cookie = `${key}=; path=/; max-age=0`;
}







