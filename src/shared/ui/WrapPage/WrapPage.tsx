import { Layout as LayoutComp } from 'antd'
import { FC, ReactNode } from 'react'

interface WrapContentProps {
	Side?: ReactNode
}

const { Content } = LayoutComp

export const WrapPage: FC<WrapContentProps> = ({ children, Side }) => {
	return (
		<div className={'flex flex-auto'}>
			{Side}
			<Content className={'w-full p-3'}>{children}</Content>
		</div>
	)
}
