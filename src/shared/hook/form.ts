import { useEffect } from 'react'

import { formData } from 'shared/lib/form'

export const useFormData = (form?: any, data?: TObject) => {
	useEffect(() => {
		if (data) {
			form?.setFields(formData(data))
		} else {
			form?.resetFields()
		}
	}, [data])
}
