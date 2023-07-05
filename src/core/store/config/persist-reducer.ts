import { rootReducer } from './root-reducer'
import { storage } from './storage'

import { persistReducer } from 'redux-persist'

export const persistedReducer = persistReducer(
	{
		key: 'root',
		storage,
		// whitelist: [auth.name, layout.name],
	},
	rootReducer
)
