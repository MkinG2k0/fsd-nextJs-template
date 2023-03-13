import { Checkbox, Radio } from 'antd'
import { WrapInputProps } from 'Components/WrapInputs/WrapInputs'
import { onChangeItem, onChangeItemValue } from 'Helper/Form'
import { FC } from 'react'

export const WrapCheckbox: FC<WrapInputProps> = (props) => {
	const { onChange, data } = props

	return <Checkbox.Group {...props} options={data} onChange={onChangeItem(onChange)} />
}

export const WrapRadio: FC<WrapInputProps> = (props) => {
	const { onChange, data } = props

	return <Radio.Group {...props} options={data} onChange={onChangeItemValue(onChange)} />
}
