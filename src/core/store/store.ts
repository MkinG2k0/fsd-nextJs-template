import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { persistedReducer } from './config/persist-reducer'
import { rtkQueryAuthMiddleware, serializable } from './middleware'
import { rtqApi } from 'core/store/config/rtq-api'

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware(serializable)
			.concat(rtqApi.middleware)
			.concat(rtkQueryAuthMiddleware),
})

setupListeners(store.dispatch)
