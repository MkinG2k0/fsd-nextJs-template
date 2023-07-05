'use client'

import { store } from './store'

import { createWrapper } from 'next-redux-wrapper'

export const nextReduxWrapper = createWrapper(() => store)
