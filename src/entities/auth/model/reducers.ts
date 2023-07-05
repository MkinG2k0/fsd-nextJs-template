import { authModel } from './types'

import { TokenService } from 'shared'

import { PayloadAction } from '@reduxjs/toolkit'

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
