import { createSlice } from '@reduxjs/toolkit'

import { extraReducers } from './extra-reducers'
import { initialState } from './init'
import { reducers } from './reducers'

export const slice = createSlice({
	name: 'auth',
	initialState,
	reducers,
	extraReducers,
})
