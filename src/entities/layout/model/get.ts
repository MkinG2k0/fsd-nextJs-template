import { useStore } from 'shared/hook/Redux'

export const GetLayout = () => useStore((state) => state['layout'])
