import { PayloadAction } from '@reduxjs/toolkit'

export const reducers = {
	setSideCollapsed(
		state: layoutModel,
		{ payload }: PayloadAction<boolean | undefined>,
	) {
		if (payload) {
			state.sideCollapsed = payload
		} else {
			state.sideCollapsed = !state.sideCollapsed
		}
	},
}
