import compose from 'compose-function'

import { WidthNextComp } from 'core/providers/width-next-comp'
import { WithLayout } from 'core/providers/with-layout'
import { WithPersist } from 'core/providers/with-persist'
import { WithSession } from 'core/providers/with-session'
import { WithStore } from 'core/providers/with-store'

const server = compose(WithStore, WithSession, WithLayout, WidthNextComp)
const client = compose(
	WithStore,
	WithPersist,
	WithSession,
	WithLayout,
	WidthNextComp,
)

export const withProviders = { server, client }
