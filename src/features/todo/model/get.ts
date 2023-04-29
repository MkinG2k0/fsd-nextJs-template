import { useStore } from 'shared/hook/Redux'

const useGet = () => useStore((state) => state['todo'])

export const GetTodo = {
	useGet,
}
