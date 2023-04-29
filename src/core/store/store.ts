import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { rtkQueryAuthMiddleware, serializable } from './middleware'
import { api, persistedReducer } from './config'

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware(serializable)
			.concat(api.middleware)
			.concat(rtkQueryAuthMiddleware),
})

// TODO middleware error types

setupListeners(store.dispatch)
