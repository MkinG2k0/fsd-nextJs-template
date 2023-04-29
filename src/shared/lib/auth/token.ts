import { TOKEN } from 'shared/constant/auth'

export const getToken = () => {
	return localStorage.getItem(TOKEN)
}

export const removeToken = () => {
	return localStorage.removeItem(TOKEN)
}

export const setToken = (token: string) => {
	localStorage.setItem(TOKEN, token)
}
