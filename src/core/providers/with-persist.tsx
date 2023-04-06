// import { Skeleton } from 'antd'
import { PersistGate } from 'redux-persist/integration/react'

import { useClient } from 'shared/hook/Server'
import { persist } from 'core/store'

export const WithPersist = (component: FC) => (props) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const isClient = useClient()

	if (isClient) {
		return (
			// @ts-ignore
			<PersistGate persistor={persist} loading={null}>
				{component(props)}
			</PersistGate>
		)
	}

	return <>{component(props)}</>
}
