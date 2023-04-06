import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './init'
import { reducers } from './reducers'

const slice = createSlice({
	name: 'auth',
	initialState,
	reducers,
})

export const { setAuth } = slice.actions

export const auth = slice.reducer
