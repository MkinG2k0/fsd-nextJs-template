import { TypedUseSelectorHook, useSelector } from 'react-redux'
import type { RootState } from 'shared/Interface/RootState'

export const useStore: TypedUseSelectorHook<RootState> = useSelector
