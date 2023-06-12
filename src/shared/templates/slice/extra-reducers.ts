import { ActionReducerMapBuilder } from '@reduxjs/toolkit'

import { FileNameFetch } from './thunk'
import { FileNameModel } from './types'

import { setStatus } from 'shared/lib/redux/set-status'

const { fetchFileName } = FileNameFetch

export const extraReducers = (builder: ActionReducerMapBuilder<FileNameModel>) => {
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
}
