import { GetServerSideProps } from 'next'

import { Todos } from 'flat-pages/todos'
import { reduxSSP } from 'shared/lib/redux'

export const getServerSideProps: GetServerSideProps = reduxSSP((store) => ({
	promise: [],
}))

const TodosPage: FC = () => {
	return <Todos />
}

export default TodosPage
