import { extraReducers } from './extra-reducers'
import { reducers } from './reducers'
import { initialState } from './init'

import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
	extraReducers,
	initialState,
	name: 'FileName',
	reducers,
})

export const { actions: FileNameActions, reducer: FileName } = slice
