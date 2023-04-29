import { GetServerSideProps } from 'next'

// eslint-disable-next-line import/no-internal-modules
import { Todos } from 'flat-pages/todos'
import { ReduxSSP } from 'shared/lib/redux'
import { TodoSlice } from 'features/todo'

export const getServerSideProps: GetServerSideProps = ReduxSSP((store) => ({
	promise: [store.dispatch(TodoSlice.fetchTodos())],
}))

const TodosPage: FC = () => {
	return <Todos />
}

export default TodosPage
