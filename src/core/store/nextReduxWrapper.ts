import { createWrapper } from 'next-redux-wrapper'

import { store } from './store'

export const nextReduxWrapper = createWrapper(() => store)
