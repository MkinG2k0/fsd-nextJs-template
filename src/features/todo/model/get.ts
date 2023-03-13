import { useStore } from 'shared/hook/Redux'

export const GetTodo = () => useStore((state) => state['todo'])
