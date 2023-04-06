import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './init'
import { reducers } from './reducers'

import { extraReducers } from 'features/todo/model/extra-reducers'

const slice = createSlice({
	name: 'Todo',
	initialState,
	reducers,
	extraReducers,
})

export const { setTodos } = slice.actions

export const todo = slice.reducer
