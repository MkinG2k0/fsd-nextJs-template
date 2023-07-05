import { rtkQueryAuthMiddleware, serializable } from './middleware'
import { persistedReducer } from './config/persist-reducer'

import { setupListeners } from '@reduxjs/toolkit/query'
import { rtqApi } from 'core/store/config/rtq-api'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware(serializable).concat(rtqApi.middleware).concat(rtkQueryAuthMiddleware),
	reducer: persistedReducer,
})

setupListeners(store.dispatch)
