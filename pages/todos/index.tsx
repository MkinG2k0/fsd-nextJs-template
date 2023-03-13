import { dispatch } from 'core/store'
import { GetTodo, useGetTodoQuery } from 'features/todo'
import { getTodos } from 'features/todo/model/thunk'
import { GetServerSideProps } from 'next'
import { Todos } from 'pages/todos'
import { Test, wrapSSPWithRedux } from 'shared/lib/server'

// export const getServerSideProps: GetServerSideProps = () =>
// 	wrapSSPWithRedux([store.dispatch(getTodos(true))])

export const getServerSideProps: GetServerSideProps = async () =>
	Test(
		{
			todo: { todos: true },
		},
		[await dispatch(getTodos())],
	)

// export const getServerSideProps: GetServerSideProps = async () => {
// 	return {
// 		props: {},
// 	}
// }

const TodosPage: FC = () => {
	// const { todos } = GetTodo()
	const { data } = useGetTodoQuery()
	// console.log(data)

	return (
		<div>
			{data?.data.map((data) => (
				<div key={data.id}>{data.title}</div>
			))}
		</div>
	)
	// return <Todos />
}

export default TodosPage
