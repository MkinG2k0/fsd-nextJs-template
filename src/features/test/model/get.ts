import { useStore } from 'shared/hook/Redux'

const useGet = () => useStore((state) => state['test'])

export const Gettest = {
	useGet,
}
