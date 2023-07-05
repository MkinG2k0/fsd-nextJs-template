import { reducers } from './reducers'
import { initialState } from './init'

import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
	initialState,
	name: 'layout',
	reducers,
})
