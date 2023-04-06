import { GetServerSideProps } from 'next'

import { ReduxSSP } from 'shared/lib/redux'
import { getTodos } from 'features/todo/model/thunk'
import { Todos } from 'flat-pages/todos'

export const getServerSideProps: GetServerSideProps = ReduxSSP((store) => ({
	promise: [store.dispatch(getTodos())],
}))

const TodosPage: FC = () => {
	return <Todos />
}

export default TodosPage
