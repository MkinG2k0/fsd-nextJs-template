import { createSlice } from '@reduxjs/toolkit'

import { extraReducers } from './extra-reducers'
import { initialState } from './init'
import { reducers } from './reducers'

const slice = createSlice({
	name: 'FileName',
	initialState,
	reducers,
	extraReducers,
})

export const { reducer: FileName, actions: FileNameActions } = slice
