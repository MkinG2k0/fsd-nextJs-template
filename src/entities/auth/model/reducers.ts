import { PayloadAction } from '@reduxjs/toolkit'

export const reducers = {
	setAuth(state: authModel, { payload }: PayloadAction<string>) {
		state.data = payload
	},
}
