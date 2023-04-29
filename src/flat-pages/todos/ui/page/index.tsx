import { TodoSlice, TodoList } from 'features/todo'

export const Todos: FC = ({}) => {
	const { todos } = TodoSlice.useGet()

	return (
		<div className={'col '}>
			{/*<AddTodo />*/}
			<TodoList todos={todos?.data} />
		</div>
	)
}
