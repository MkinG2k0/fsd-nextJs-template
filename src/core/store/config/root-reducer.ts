import { combineReducers } from '@reduxjs/toolkit'

import { api } from './api'

import { todo } from 'features/todo'
import { auth } from 'entities/auth'
import { layout } from 'entities/layout'

export const rootReducer = combineReducers({
	[api.reducerPath]: api.reducer,
	auth,
	layout,
	todo,
})
