import { persistReducer } from 'redux-persist'

import { rootReducer } from './root-reducer'
import { storage } from './storage'

export const persistedReducer = persistReducer(
	{
		key: 'root',
		storage,
		whitelist: ['auth', 'layout'],
	},
	rootReducer
)
