import { combineReducers } from '@reduxjs/toolkit'
import { auth } from 'entities/auth'
import { layout } from 'entities/layout'
import { todo } from 'features/todo'
import { api } from './api'

export const rootReducer = combineReducers({
	[api.reducerPath]: api.reducer,
	auth,
	layout,
	todo,
})
