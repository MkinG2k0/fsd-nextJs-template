import axios from 'axios'
import { AUTH_STATUS } from 'shared/constant/Auth'
import { setToken } from 'shared/lib/auth'

export const http = axios.create({
	baseURL: process.env.NEXT_PUBLIC_URL_ENDPOINT,
	timeout: 10000,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
})

http.interceptors.request.use(
	(config) => {
		const token = 'getToken()'

		config.headers.Authorization = `Bearer ${token}`

		return config
	},
	(error) => Promise.reject(error),
)

http.interceptors.response.use(
	(response) => response,
	(error) => {
		if (AUTH_STATUS.includes(error?.response?.status)) {
			setToken('')
			// TODO Next Navigate
			// navigate(NAV.AUTH)
		}

		return Promise.reject(error)
	},
)
