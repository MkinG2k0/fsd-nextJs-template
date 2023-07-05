'use client'

import { useClient } from 'shared'

import { PersistGate } from 'redux-persist/integration/react'
import { persist } from '../store/config'

export const WithPersist = (component: FC) => (props) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const isClient = useClient()

	if (isClient) {
		return (
			<PersistGate loading={null} persistor={persist}>
				{component(props)}
			</PersistGate>
		)
	}

	return <>{component(props)}</>
}
