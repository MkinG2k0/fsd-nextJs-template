import { store } from 'core/store'

export type RootState = ReturnType<typeof store.getState>
