import { PayloadAction } from '@reduxjs/toolkit'

import { TFileName } from './types'

export const reducers = {
	setFileName(state: TFileName, { payload }: PayloadAction<string>) {
		state.data.data = payload
	},
}
