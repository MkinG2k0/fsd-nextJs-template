import { Button, Input } from 'antd'

export const AddTodo: FC = () => {

	return (
		<div className={'row'}>
			<Input/>
			<Button type={'primary'}>Add</Button>
		</div>
	)
}
