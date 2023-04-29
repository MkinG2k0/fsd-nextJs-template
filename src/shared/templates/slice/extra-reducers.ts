import { ActionReducerMapBuilder } from '@reduxjs/toolkit'

import { getFileNameAll } from './thunk'
import { TFileName } from './types'

import { setStatus, hydrate } from 'shared/lib/redux'

export const extraReducers = (builder: ActionReducerMapBuilder<TFileName>) => {
	builder
		.addCase(getFileNameAll.pending, (state, action) => {
			setStatus(state.data, action)
		})
		.addCase(getFileNameAll.rejected, (state, action) => {
			setStatus(state.data, action)
		})
		.addCase(getFileNameAll.fulfilled, (state, action) => {
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
