import React, { HTMLInputTypeAttribute } from 'react'

export const AuthForm = () => {
	return (
		<Form>
			<div className={'col text-red-800'}>
				<Form.ItemAge name={'name2'} data={{}} />
				<Form.ItemName2 name={'age'} data={{}} />
				{/*<Form.Item name={'age'} data={{}} />*/}
			</div>
		</Form>
	)
}

export const initForm = <
	T extends Record<
		string,
		{
			type: HTMLInputTypeAttribute
			defaultValue?: any
			// Omit<T[K], 'Comp'>
			Comp?: (props: { type: string }) => JSX.Element
		}
	>,
	K extends keyof T
>(
	data: T,
) => {
	const Item = (props: { name: K; data: Omit<T[K], 'type' | 'Comp'> }) => <input />
	//  Record<string, (props: any) => JSX.Element>
	// eslint-disable-next-line react/no-children-prop
	const Form = ({ children }) => React.createElement('div', { children })

	// Form.
	Form.Item = Item

	const arrObj = Object.entries(data)

	arrObj.map(([name, value]) => {
		const nameChars = name.split('')
		const first = (nameChars?.at(0) || '').toUpperCase()
		const Name = first.concat(nameChars.slice(1).join(''))
		const { Comp, ...props } = value
		const CompProps = props as Omit<T[K], 'Comp'>

		Form['Item'.concat(Name)] = value?.Comp || Item
	})
	//  Item: (props: { name: K; data: Omit<T[K], 'type' | 'Comp'> }) => JSX.Element
	type NameComp = `Item${Capitalize<K>}` | 'Item'

	type TForm = Record<
		NameComp,
		(props: { name: K; data: Omit<T[K], 'type' | 'Comp'> }) => JSX.Element
	>
	// & ((props: any) => JSX.Element)
	type TF = (props: any) => JSX.Element
	return Form as TForm & TF
}

const Form = initForm({
	name2: {
		type: 'string',
		defaultValue: '123',
		Comp: (props) => {
			return (
				<div>
					{/*<div>data {data.defaultValue}</div>*/}
					<div>props {props.type}</div>
					<input />
				</div>
			)
		},
	},
	age: { type: 'number' },
})
