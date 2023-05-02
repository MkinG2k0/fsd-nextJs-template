import { PayloadAction } from '@reduxjs/toolkit'

import { FileNameModel } from './types'

export const reducers = {
	setFileName(state: FileNameModel, { payload }: PayloadAction<string>) {
		state.data.data = payload
	},
}
