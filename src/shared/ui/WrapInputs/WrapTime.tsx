import { DatePicker, TimePicker } from 'antd'
import { WrapInputProps } from 'Components/WrapInputs/WrapInputs'
import { disabledDate } from 'Helper/Date'
import { onChangeItem } from 'Helper/Form'
import { FC } from 'react'

export const WrapDate: FC<WrapInputProps> = (props) => {
	const { onChange, validate } = props
	return <DatePicker {...props} onChange={onChangeItem(onChange)} disabledDate={disabledDate(validate)} />
}

export const WrapTime: FC<WrapInputProps> = (props) => {
	const { onChange, validate } = props

	return <TimePicker {...props} onChange={onChangeItem(onChange)} disabledDate={disabledDate(validate)} />
}
