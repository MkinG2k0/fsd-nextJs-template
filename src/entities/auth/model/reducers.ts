import { PayloadAction } from '@reduxjs/toolkit'

import { authModel } from './types'

import { TokenService } from 'entities/auth/lib/token'

export const reducers = {
	removeToken(state: authModel) {
		state.auth.data = undefined

		TokenService.remove()
	},
	setToken(state: authModel, { payload }: PayloadAction<string>) {
		state.auth.data = { token: payload }

		TokenService.set(payload)
	},
}
