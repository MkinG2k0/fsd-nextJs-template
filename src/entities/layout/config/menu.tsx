import { PieChartOutlined, UserOutlined } from '@ant-design/icons'

import { MenuItem } from 'shared/Interface/antd'
import { getItem } from 'shared/lib/antd'

export const MenuItems: MenuItem[] = [
	getItem('Todos', 'todos', <PieChartOutlined />),
	getItem('Main', '/', <UserOutlined />),
	getItem('User', 'auth', <UserOutlined />),
]
