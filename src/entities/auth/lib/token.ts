import { TOKEN } from 'shared/constant/auth'

export const TokenService = {
	name: 'TOKEN',
	set: (token: string) => localStorage.setItem(TOKEN, token),
	get: () => localStorage.getItem(TOKEN),
	remove: () => localStorage.removeItem(TOKEN),
}

// class TokenService {
// 	static TOKEN = 'TOKEN'
//
// 	static get() {
// 		return localStorage.getItem(this.TOKEN)
// 	}
//
// 	static set(token: string) {
// 		localStorage.setItem(this.TOKEN, token)
// 	}
//
// 	static remove() {
// 		localStorage.removeItem(this.TOKEN)
// 	}
// }
