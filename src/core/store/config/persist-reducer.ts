import { persistReducer } from 'redux-persist'

import { rootReducer } from 'core/store/config/rootReducer'
import { storage } from 'core/store/config/storage'

export const persistedReducer = persistReducer(
	{
		key: 'root',
		storage,
		whitelist: ['auth', 'layout'],
	},
	rootReducer,
)
