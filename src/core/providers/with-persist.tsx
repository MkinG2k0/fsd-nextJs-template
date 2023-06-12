import { PersistGate } from 'redux-persist/integration/react'

import { persist } from '../store/config'

import { useClient } from 'shared'

export const WithPersist = (component: FC) => (props) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const isClient = useClient()

	if (isClient) {
		return (
			<PersistGate persistor={persist} loading={null}>
				{component(props)}
			</PersistGate>
		)
	}

	return <>{component(props)}</>
}
