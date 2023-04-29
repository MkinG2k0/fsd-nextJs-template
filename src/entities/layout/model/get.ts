import { useStore } from 'shared/hook/Redux'

const useGet = () => useStore((state) => state['layout'])

export const GetLayout = { useGet }
