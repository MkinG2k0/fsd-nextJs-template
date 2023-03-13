import { Layout, Menu, MenuProps } from 'antd'
import { MenuItems } from 'entities/layout/config/menu'
import { SiderBtn } from 'entities/layout/ui/sider-btn'
import { useRouter } from 'next/router'
import style from './header.module.scss'

const WrapHeader = Layout.Header

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
	const router = useRouter()

	const onClickMenu: MenuProps['onClick'] = ({ key }) => {
		router.push(key)
	}

	return (
		<WrapHeader className={'flex bg-gray-700'}>
			<SiderBtn />
			<Menu
				className={'bg-gray-700 w-full'}
				theme={'dark'}
				mode={'horizontal'}
				items={MenuItems}
				onClick={onClickMenu}
			/>
		</WrapHeader>
	)
}

export default Header
