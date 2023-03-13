import { useStore } from 'shared/hook/Redux'

export const Getmain = () => useStore((state) => state['main'])
