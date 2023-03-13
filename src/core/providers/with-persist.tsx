import { Skeleton } from 'antd'
import { PersistGate } from 'redux-persist/integration/react'

import { persist } from 'core/store/config/persist'

export const WithPersist = (component: FC) => (props) =>
	(
		// @ts-ignore
		<PersistGate persistor={persist} loading={<Skeleton />}>
			{component(props)}
		</PersistGate>
	)
