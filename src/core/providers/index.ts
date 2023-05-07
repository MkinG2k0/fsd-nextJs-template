import compose from 'compose-function'

import { WidthNextComp } from './width-next-comp'
import { WithLayout } from './with-layout'
import { WithPersist } from './with-persist'
import { WithStore } from './with-store'

export const withProviders = compose(WithStore, WithPersist, WithLayout, WidthNextComp)
