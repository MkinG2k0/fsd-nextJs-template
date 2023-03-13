import { Card } from 'antd'
import { Layout } from 'entities/layout'
import style from './Todo.module.scss'

export const Todo: FC<Res_Todo.Base> = ({ title, completed }) => {
	return (
		<Card
			title={<span className={' text-white'}>{title}</span>}
			className={'bg-gray-700 text-white'}
		>
			{String(completed)}
		</Card>
	)
}
