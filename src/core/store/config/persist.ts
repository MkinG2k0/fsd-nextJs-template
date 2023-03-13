import { persistStore } from 'redux-persist'

import { store } from 'core/store/store'

export const persist = persistStore(store)
