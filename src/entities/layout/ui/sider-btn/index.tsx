import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { FC } from 'react'

import { store } from 'core/store'
import { GetLayout, setSideCollapsed } from 'entities/layout'

interface sideBtnProps {}

export const SiderBtn: FC<sideBtnProps> = ({}) => {
	const { sideCollapsed } = GetLayout()

	const onCollapse = () => {
		store.dispatch(setSideCollapsed())
	}

	return (
		<div className={'clBtn bg-gray-800 flex p-4 w-20'}>
			<Button
				onClick={onCollapse}
				type={'link'}
				className={'align-top text-white'}
			>
				{sideCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
			</Button>
		</div>
	)
}
