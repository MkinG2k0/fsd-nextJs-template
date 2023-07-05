import { reducers } from './reducers'
import { initialState } from './init'

import { createSlice } from '@reduxjs/toolkit'

const Index = createSlice({
	initialState,
	name: 'auth',
	reducers,
})

export const { setauth } = Index.actions

export const auth = Index.reducer
