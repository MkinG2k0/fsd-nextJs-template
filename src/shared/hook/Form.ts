import { FormInstance } from 'antd'
import { useEffect } from 'react'

import { formData } from 'shared/lib/form'

export const useFormData = (form?: FormInstance, data?: TObject) => {
	useEffect(() => {
		if (data) {
			form?.setFields(formData(data))
		} else {
			form?.resetFields()
		}
	}, [data])
}
