import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './init'
import { reducers } from './reducers'

export const slice = createSlice({
	name: 'layout',
	initialState,
	reducers,
})
