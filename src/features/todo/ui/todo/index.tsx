// import { Card } from 'antd'

export const Todo: FC<Res_Todo.Base> = ({ title, completed }) => {
	return (
		<div
			// title={<span className={' text-white'}>{title}</span>}
			className={'bg-gray-700 text-white'}
		>
			{String(completed)}
		</div>
	)
}
