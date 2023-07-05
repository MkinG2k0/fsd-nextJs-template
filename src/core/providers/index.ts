'use client'

import { WithPersist } from './with-persist'
import { WithStore } from './with-store'

import compose from 'compose-function'

export const withProviders = compose(WithStore, WithPersist)
