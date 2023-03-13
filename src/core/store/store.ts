import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { persistedReducer } from 'core/store/config/persist-reducer'
import middleware from './middleware'

const createStore = (preloadedState?: any) =>
	configureStore({
		reducer: persistedReducer,
		middleware,
		preloadedState,
	})

export let store: ReturnType<typeof createStore> = createStore()

export function getStore(preloadedState?: RootState) {
	store = createStore(preloadedState)
	return store
}

setupListeners(store.dispatch)
