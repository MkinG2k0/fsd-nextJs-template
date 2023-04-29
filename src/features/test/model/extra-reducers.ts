import { ActionReducerMapBuilder } from '@reduxjs/toolkit'

import { gettestAll } from './thunk'
import { Ttest } from './types'

import { setStatus, hydrate } from 'shared/lib/redux'

export const extraReducers = (builder: ActionReducerMapBuilder<Ttest>) => {
	builder
		.addCase(gettestAll.pending, (state, action) => {
			setStatus(state.data, action)
		})
		.addCase(gettestAll.rejected, (state, action) => {
			setStatus(state.data, action)
		})
		.addCase(gettestAll.fulfilled, (state, action) => {
			const { payload } = action
			setStatus(state.data, action)

			state.data = payload
		})

	builder.addCase(hydrate, (state, { payload }) => {
		if (payload) {
			// logic
		}
	})
}
