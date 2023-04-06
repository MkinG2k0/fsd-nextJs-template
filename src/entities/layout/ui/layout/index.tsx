import { Footer } from '../footer'
import { Header } from '../header'

import style from './layout.module.scss'

export const Layout: FC = ({ children }) => {
	return (
		<div className={style.wrap}>
			<div className={style.header}>
				<Header />
			</div>
			<div className={style.content}>{children}</div>
			<div className={style.footer}>
				<Footer />
			</div>
		</div>
	)
}
