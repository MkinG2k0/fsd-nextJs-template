import { Skeleton } from 'antd'
import { persist } from 'core/store/config/persist'
import { PersistGate } from 'redux-persist/integration/react'

export const WithPersist = (component: FC) => (props) =>
	(
		// @ts-ignore
		<PersistGate persistor={persist} loading={<Skeleton />}>
			{component(props)}
		</PersistGate>
	)
