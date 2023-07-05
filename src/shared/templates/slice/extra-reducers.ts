import { FileNameModel } from './types'
import { FileNameFetch } from './thunk'

import { setStatus } from 'shared/lib/redux/set-status'

import { ActionReducerMapBuilder } from '@reduxjs/toolkit'

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
