import { TOKEN } from 'shared'

export const TokenService = {
	get: () => localStorage.getItem(TOKEN),
	name: 'TOKEN',
	remove: () => localStorage.removeItem(TOKEN),
	set: (token: string) => localStorage.setItem(TOKEN, token),
}
