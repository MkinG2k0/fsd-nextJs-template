'use client'
import { Provider } from 'react-redux'

import { nextReduxWrapper } from 'core'

export const WithStore = (component: FC) => (rest) => {
	const { props, store } = nextReduxWrapper.useWrappedStore(rest)

	return <Provider store={store}>{component(props)}</Provider>
}
