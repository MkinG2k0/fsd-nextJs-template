export const rule = (name: string) => ({
	required: true,
	message: `Поле "${name}" обязательно`,
})

export const formData = (data?: Record<string, any>) =>
	Object.entries(data || {}).map(([name, value]) => ({
		name,
		value,
	}))
