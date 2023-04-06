import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './init'
import { reducers } from './reducers'

const slice = createSlice({
	name: 'layout',
	initialState,
	reducers,
})

export const { setSideCollapsed } = slice.actions

export const layout = slice.reducer
