import { Req_Auth, Res_Auth } from 'entities/auth/api/auth'
import { RAuth } from 'entities/auth'

export const authService = {
	logOut: () => {
		// dispatch(AuthSlice.removeToken())
	},

	login: (loginRequest: Req_Auth.Login): Promise<Res_Auth.Login> => {
		return RAuth.login(loginRequest)
			.then(({ data }) => {
				// dispatch(AuthSlice.setToken(data.data.token))
				return data
			})
			.catch(({ response }) => {
				return response.data
			})
	},

	refresh: (): Promise<Res_Auth.Login> => {
		return RAuth.refresh({})
			.then(({ data }) => {
				const token = data.data.token

				if (token) {
					// dispatch(AuthSlice.setToken(data.data.token))
				} else {
					// TODO Next nav
					// navHistory.push(NAV.AUTH)
				}

				return data
			})
			.catch(({ response }) => {
				return response.data
			})
	},
}
