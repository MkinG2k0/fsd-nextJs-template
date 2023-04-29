import { ActionReducerMapBuilder } from '@reduxjs/toolkit'

import { authModel } from './types'

import { TokenService } from 'entities/auth/lib/token'
import { fetchLogin, fetchRefresh } from 'entities/auth/model/thunk'
import { setStatus } from 'shared/lib/redux'

export const extraReducers = (builder: ActionReducerMapBuilder<authModel>) => {
	builder
		.addCase(fetchLogin.pending, (state, action) => {
			setStatus(state.auth, action)
		})
		.addCase(fetchLogin.rejected, (state, action) => {
			setStatus(state.auth, action)

			state.auth.data = { token: undefined }
			TokenService.remove()
		})
		.addCase(fetchLogin.fulfilled, (state, action) => {
			const { payload } = action
			setStatus(state.auth, action)

			state.auth.data = payload
			TokenService.set(payload.token)
		})

	builder
		.addCase(fetchRefresh.pending, (state, action) => {
			setStatus(state.auth, action)
		})
		.addCase(fetchRefresh.rejected, (state, action) => {
			setStatus(state.auth, action)

			state.auth.data = { token: undefined }
			TokenService.remove()
		})
		.addCase(fetchRefresh.fulfilled, (state, action) => {
			const { payload } = action
			setStatus(state.auth, action)

			state.auth.data = payload

			if (payload?.token) {
				TokenService.set(payload?.token)
			}
		})
}
