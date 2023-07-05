import { extraReducers } from './extra-reducers'
import { reducers } from './reducers'
import { initialState } from './init'

import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
	extraReducers,
	initialState,
	name: 'auth',
	reducers,
})
