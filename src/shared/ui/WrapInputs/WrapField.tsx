import { Input, InputNumber } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { WrapInputProps } from 'Components/WrapInputs/WrapInputs'
import { onChangeItem, onChangeItemValue } from 'Helper/Form'
import { FC } from 'react'

export const WrapText: FC<WrapInputProps> = (props) => {
	const { onChange } = props

	return <Input {...props} onChange={onChangeItemValue(onChange)} />
}

export const WrapTextArea: FC<WrapInputProps> = (props) => {
	const { onChange } = props

	return <TextArea {...props} onChange={onChangeItemValue(onChange)} />
}

export const WrapNumber: FC<WrapInputProps> = (props) => {
	const {
		onChange,
		validate: { min, max },
	} = props
	return <InputNumber {...props} onChange={onChangeItem(onChange)} min={min} max={max} />
}

export const WrapPhoneNumber: FC<WrapInputProps> = (props) => {
	const { onChange } = props

	return <Input {...props} onChange={onChangeItemValue(onChange)} />
}
