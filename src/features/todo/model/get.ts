import { useStore } from 'shared'

const useGet = () => useStore((state) => state['todo'])

export const getTodo = {
	useGet,
}
