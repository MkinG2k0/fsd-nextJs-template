// import { Form, FormProps } from 'antd'

// interface WrapFormProps extends FormProps {
// 	inputDelay?: number
// 	formData?: TObject
// }

// export const WrapForm: FC<WrapFormProps> = ({
// 	children,
// 	onFieldsChange,
// 	inputDelay,
// 	form,
// 	formData,
// 	...formProps
// }) => {
// 	const [time, setTime] = useState<NodeJS.Timeout | undefined>(undefined)
//
// 	useEffect(() => {
// 		return () => {
// 			clearInterval(time)
// 		}
// 	}, [])
//
// 	useFormData(form, formData)
//
// 	const handleFieldsChange: FormProps['onFieldsChange'] = (
// 		changedFields,
// 		allFields,
// 	) => {
// 		clearInterval(time)
//
// 		const startTime = setTimeout(() => {
// 			onFieldsChange?.(changedFields, allFields)
// 		}, inputDelay)
//
// 		setTime(startTime)
// 	}
//
// 	return (
// 		<Form
// 			layout={'vertical'}
// 			onFieldsChange={handleFieldsChange}
// 			form={form}
// 			{...formProps}
// 		>
// 			{children}
// 		</Form>
// 	)
// }
//
// WrapForm.defaultProps = {
// 	inputDelay: 500,
// 	formData: {},
// }
export {}
