import { useStore } from 'shared/hook/Redux'

export const Getauth = () => useStore((state) => state['auth'])
