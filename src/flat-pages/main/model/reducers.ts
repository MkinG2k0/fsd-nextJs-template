import { PayloadAction } from '@reduxjs/toolkit'

export const reducers = {
	setmain(state: mainModel, { payload }: PayloadAction<string>) {
		state.data = payload
	},
}
