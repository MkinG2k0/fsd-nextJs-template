import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './init'
import { reducers } from './reducers'
import { extraReducers } from './extra-reducers'

export const slice = createSlice({
	name: 'FileName',
	initialState,
	reducers,
	extraReducers,
})
