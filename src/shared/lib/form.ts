export const rule = (name: string) => ({
	message: `Поле "${name}" обязательно`,
	required: true,
})

export const formData = (data?: Record<string, any>) =>
	Object.entries(data || {}).map(([name, value]) => ({
		name,
		value,
	}))
