import { useStore } from 'shared/hook/Redux'

export const GetFileName = () => useStore((state) => state['FileName'])
