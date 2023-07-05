'use client'
import style from './main.module.scss'

import { FC } from 'react'

interface MainProps {}

export const Main: FC<MainProps> = ({}) => {
	return (
		<div className={style.wrap}>фыв{/*<Button variant={'contained'}>Hello World</Button>*/}</div>
	)
}
