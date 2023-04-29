import { Provider } from 'react-redux'

import { wrapper } from 'core'

export const WithStore = (component: FC) => (rest) => {
	const { store, props } = wrapper.useWrappedStore(rest)

	return <Provider store={store}>{component(props)}</Provider>
}
