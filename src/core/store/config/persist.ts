import { persistStore } from 'redux-persist'

import { store } from 'core'

export const persist = persistStore(store)
