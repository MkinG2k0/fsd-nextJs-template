import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './init'
import { reducers } from './reducers'

const Index = createSlice({
	name: 'layout',
	initialState,
	reducers,
})

export const { setSideCollapsed } = Index.actions

export const layout = Index.reducer
