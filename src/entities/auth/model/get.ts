import { useStore } from 'shared'

const useGet = () => useStore((state) => state['auth'])

export const GetAuth = { useGet }
