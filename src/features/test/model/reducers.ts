import { PayloadAction } from '@reduxjs/toolkit'

import { Ttest } from './types'

export const reducers = {
	settest(state: Ttest, { payload }: PayloadAction<string>) {
		state.data.data = payload
	},
}
