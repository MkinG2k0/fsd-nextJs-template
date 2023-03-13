import { Select, Switch } from 'antd'
import { onChangeItemValue } from 'Helper/Form'
import { FC } from 'react'

export interface WrapInputProps {
	title: string
	type: string
	uuid: string
	onChange: (...args: any[]) => void
	data: any[]
	defaultValue: any
	initialValue: any
	validate: TValidate
	isEdite: boolean
}

export interface TValidate {
	min?: number
	max?: number
	type?: string
	pattern?: string
	required?: boolean
	message?: string
}

export const WrapSelect: FC<WrapInputProps> = (props) => {
	const { onChange, data } = props
	return <Select onChange={onChangeItemValue(onChange)} options={data} />
}

export const WrapToggle: FC<WrapInputProps> = (props) => {
	const { onChange, data } = props

	return <Switch onChange={onChangeItemValue(onChange)} />
}

export const NonType = () => {
	console.log('Non type')
	return <div>NonType</div>
}
