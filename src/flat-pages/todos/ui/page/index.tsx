import { GetTodo, TodoList } from 'features/todo'
import { AddTodo } from 'features/todo/ui/add-todo/add-todo'

export const Todos: FC = ({}) => {
	const { todos } = GetTodo()

	return (
		<div className={'col '}>
			<AddTodo />
			<TodoList todos={todos?.data} />
		</div>
	)
}
