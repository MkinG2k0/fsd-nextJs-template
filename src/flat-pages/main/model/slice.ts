import { reducers } from './reducers'
import { initialState } from './init'

import { createSlice } from '@reduxjs/toolkit'

const Index = createSlice({
	initialState,
	name: 'main',
	reducers,
})

export const { setmain } = Index.actions

export const main = Index.reducer
