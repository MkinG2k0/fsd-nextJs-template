import { Layout as WrapLayout } from 'antd'

import { Footer } from 'entities/layout/ui/footer'
import { Header } from 'entities/layout/ui/header'
import { Sider } from 'entities/layout/ui/sider'

const { Content } = WrapLayout

export const Layout: FC = ({ children }) => {
	return (
		<div className={'min-h-[100vh] flex flex-col bg-gray-800'}>
			<Header />
			<div className="site-layout flex-auto flex ">
				<Sider />
				<div className="site-layout flex-auto flex flex-col">
					<Content className={'bg-gray-800 p-3'}>{children}</Content>
					<Footer />
				</div>
			</div>
		</div>
	)
}
