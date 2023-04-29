import { TodoSlice, TodoList } from 'features/todo'
import { AddTodo } from 'features/todo/ui/add-todo/add-todo'

export const Todos: FC = ({}) => {
	const { todos } = TodoSlice.useGet()

	return (
		<div className={'col '}>
			<AddTodo />
			<TodoList todos={todos?.data} />
		</div>
	)
}
