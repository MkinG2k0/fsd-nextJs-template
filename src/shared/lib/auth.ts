import { TOKEN } from 'shared/constant/auth'

export function getToken() {
	return localStorage?.getItem(TOKEN)
}

export function setToken(token: string) {
	return localStorage.setItem(TOKEN, token)
}
