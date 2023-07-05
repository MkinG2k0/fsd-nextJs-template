import { FileNameModel } from './types'

import { PayloadAction } from '@reduxjs/toolkit'

export const reducers = {
	setFileName(state: FileNameModel, { payload }: PayloadAction<string>) {
		state.data.data = payload
	},
}
