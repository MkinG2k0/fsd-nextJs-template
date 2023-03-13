import { Todo } from 'features/todo/ui/todo'
import { Map } from 'react-easy-map'
import style from './TodoList.module.scss'

export interface TodoListProps {
	todos: Res_Todo.Base[]
}

export const TodoList: FC<TodoListProps> = ({ todos }) => {
	return (
		<div className={'col '}>
			<Map item={Todo} data={todos} />
		</div>
	)
}
