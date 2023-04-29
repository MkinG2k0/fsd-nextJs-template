import { TOKEN } from 'shared'

export const TokenService = {
	name: 'TOKEN',
	set: (token: string) => localStorage.setItem(TOKEN, token),
	get: () => localStorage.getItem(TOKEN),
	remove: () => localStorage.removeItem(TOKEN),
}
