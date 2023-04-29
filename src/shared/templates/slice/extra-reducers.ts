import { ActionReducerMapBuilder } from '@reduxjs/toolkit'

import { fetchFileNameAll } from './thunk'
import { TFileName } from './types'

import { setStatus, hydrate } from 'shared/lib/redux'

export const extraReducers = (builder: ActionReducerMapBuilder<TFileName>) => {
	builder
		.addCase(fetchFileNameAll.pending, (state, action) => {
			setStatus(state.data, action)
		})
		.addCase(fetchFileNameAll.rejected, (state, action) => {
			setStatus(state.data, action)
		})
		.addCase(fetchFileNameAll.fulfilled, (state, action) => {
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
