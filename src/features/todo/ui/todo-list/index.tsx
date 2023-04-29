import { Map } from 'react-easy-map'

import { Todo } from 'features/todo'

export interface TodoListProps {
	todos?: Res_Todo.Base[]
}

export const TodoList: FC<TodoListProps> = ({ todos }) => {
	return (
		<div className={'col '}>
			<Map item={Todo} data={todos} />
		</div>
	)
}
