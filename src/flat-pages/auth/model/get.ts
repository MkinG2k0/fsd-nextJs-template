import { useStore } from 'shared'

export const GetAuth = () => useStore((state) => state['auth'])
