import { PayloadAction } from '@reduxjs/toolkit'

export const reducers = {
	setTodos(state: FileNameModel, { payload }: PayloadAction<string>) {
		state.data = payload
	},
}
