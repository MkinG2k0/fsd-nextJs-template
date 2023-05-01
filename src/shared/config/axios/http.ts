import axios from 'axios'

import { AxiosConfig } from './config'
import { TokenService, AUTH_STATUS } from 'shared'

export const http = axios.create(AxiosConfig)

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
			TokenService.set('set')
			// TODO Next Navigate
			// navigate(NAV.AUTH)
		}

		return Promise.reject(error)
	},
)
