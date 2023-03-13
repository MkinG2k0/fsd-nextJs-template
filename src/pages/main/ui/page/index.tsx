import { FC } from 'react'

import style from './main.module.scss'

interface mainProps {}

export const Main: FC<mainProps> = ({}) => {
	return <div className={style.wrap}>main</div>
}
