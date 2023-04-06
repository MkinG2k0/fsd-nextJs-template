import { PayloadAction } from '@reduxjs/toolkit'

export const reducers = {
	setauth(state: authModel, { payload }: PayloadAction<string>) {
		state.data = payload
	},
}
