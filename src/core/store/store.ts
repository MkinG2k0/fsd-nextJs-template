import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

// use middleware

import { persistedReducer } from 'core/store/config/persist-reducer'
import { serializable } from 'core/store/middleware/serializable'
import { api } from 'core/store/config/api'
import { rtkQueryAuthMiddleware } from 'core/store/middleware/auth'

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware(serializable)
			.concat(api.middleware)
			.concat(rtkQueryAuthMiddleware),
})

// TODO middleware error types

setupListeners(store.dispatch)
