import { rootReducer } from 'core/store/config/rootReducer'
import { storage } from 'core/store/config/storage'
import { persistReducer } from 'redux-persist'

export const persistedReducer = persistReducer(
	{
		key: 'root',
		storage,
		whitelist: ['auth'],
	},
	rootReducer,
)
