import { useEffect } from 'react'

import { GetTodo, TodoList } from 'features/todo'
import { AddTodo } from 'features/todo/ui/add-todo/add-todo'

export const Todos: FC = ({}) => {
	const { todos } = GetTodo()
	useEffect(() => {
		// store.dispatch(setTodos(todos))
	}, [])
	return (
		<div className={'col '}>
			<AddTodo />
			<TodoList todos={todos} />
		</div>
	)
}
