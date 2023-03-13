import { useStore } from 'shared/hook/Redux'

export const GetAuth = () => useStore((state) => state['auth'])
