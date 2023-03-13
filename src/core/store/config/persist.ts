import { store } from 'core/store/store'
import { persistStore } from 'redux-persist'

export const persist = persistStore(store)
