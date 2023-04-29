import { useStore } from 'shared'

const useGet = () => useStore((state) => state['layout'])

export const GetLayout = { useGet }
