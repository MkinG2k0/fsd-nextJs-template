import { Layout, Menu, MenuProps } from 'antd'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { GetLayout } from 'entities/layout'
import { MenuItems } from 'entities/layout/config/menu'

const WrapSider = Layout.Sider

interface SiderProps {}

export const Sider: FC<SiderProps> = ({}) => {
	const { sideCollapsed } = GetLayout()
	const router = useRouter()

	const onClickMenu: MenuProps['onClick'] = ({ key }) => {
		router.push(key)
	}

	return (
		<WrapSider className={'bg-gray-900 '} collapsed={sideCollapsed}>
			<Menu
				theme={'dark'}
				mode="inline"
				items={MenuItems}
				onClick={onClickMenu}
			/>
		</WrapSider>
	)
}

export default Sider
