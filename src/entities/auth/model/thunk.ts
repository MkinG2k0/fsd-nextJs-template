import { RAuth } from 'entities/auth'

import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchLogin = createAsyncThunk<Res_Auth.Login, Req_Auth.Login, { rejectValue: string }>(
	'fetch/auth/login',
	async (login) => {
		const data = await RAuth.login(login)

		return data.data.data
	}
)

export const fetchRefresh = createAsyncThunk<
	Res_Auth.Refresh,
	Req_Auth.Refresh,
	{
		rejectValue: any
	}
>('fetch/auth/refresh', async (refreshToken, { getState, rejectWithValue }) => {
	const token = (getState() as RootState).auth.auth.data?.token || ''
	let data

	if (token) {
		data = await RAuth.refresh({ token })
	} else {
		rejectWithValue('err')
		return undefined
	}
	// TODO brain
	return data.data.data
})
