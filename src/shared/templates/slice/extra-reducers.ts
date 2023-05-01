import { ActionReducerMapBuilder } from '@reduxjs/toolkit'

import { FileNameFetch } from './thunk'
import { TFileName } from './types'
import { setStatus, hydrate } from 'shared/lib/redux'

const { fetchFileName } = FileNameFetch

export const extraReducers = (builder: ActionReducerMapBuilder<TFileName>) => {
	builder
		.addCase(fetchFileName.pending, (state, action) => {
			setStatus(state.data, action)
		})
		.addCase(fetchFileName.rejected, (state, action) => {
			setStatus(state.data, action)
		})
		.addCase(fetchFileName.fulfilled, (state, action) => {
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
