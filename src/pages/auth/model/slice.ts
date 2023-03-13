import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './init'
import { reducers } from './reducers'

const Index = createSlice({
	name: 'auth',
	initialState,
	reducers,
})

export const { setauth } = Index.actions

export const auth = Index.reducer
