import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './init'
import { reducers } from './reducers'

const Index = createSlice({
	name: 'main',
	initialState,
	reducers,
})

export const { setmain } = Index.actions

export const main = Index.reducer
