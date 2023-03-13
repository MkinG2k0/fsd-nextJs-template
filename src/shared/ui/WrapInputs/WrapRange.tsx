import { DatePicker, Slider } from 'antd'
import { WrapInputProps } from 'Components/WrapInputs/WrapInputs'
import { disabledDate } from 'Helper/Date'
import { onChangeItem } from 'Helper/Form'
import { FC } from 'react'

const { RangePicker } = DatePicker

export const WrapRange: FC<WrapInputProps> = (props) => {
	const {
		onChange,
		validate: { min, max },
	} = props
	return <Slider {...props} range onChange={onChangeItem(onChange)} min={min} max={max} />
}

export const WrapNumberRange: FC<WrapInputProps> = (props) => {
	const {
		onChange,
		validate: { min, max },
		initialValue,
	} = props

	return <Slider {...props} defaultValue={initialValue} onChange={onChangeItem(onChange)} min={min} max={max} />
}

export const WrapDateRange: FC<WrapInputProps> = (props) => {
	const { onChange, validate } = props

	return <RangePicker {...props} onChange={onChangeItem(onChange)} disabledDate={disabledDate(validate)} />
}

export const WrapTimeRange: FC<WrapInputProps> = (props) => {
	const { onChange, validate } = props

	return <RangePicker {...props} showTime onChange={onChangeItem(onChange)} disabledDate={disabledDate(validate)} />
}
