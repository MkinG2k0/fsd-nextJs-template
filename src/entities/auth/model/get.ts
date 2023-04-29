import { useStore } from 'shared/hook/Redux'

const useGet = () => useStore((state) => state['auth'])

export const GetAuth = { useGet }
