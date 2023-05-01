import { GetServerSideProps } from 'next'

import { Todos } from 'flat-pages/todos'
import { ReduxSSP } from 'shared/lib/redux'

export const getServerSideProps: GetServerSideProps = ReduxSSP((store) => ({
	promise: [],
}))

const TodosPage: FC = () => {
	return <Todos />
}

export default TodosPage
