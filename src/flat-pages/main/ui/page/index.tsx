import { Button } from '@mui/material'
import { FC } from 'react'

import style from './main.module.scss'

interface MainProps {}

export const Main: FC<MainProps> = ({}) => {
	return (
		<div className={style.wrap}>
			<Button variant="contained">Hello World</Button>
		</div>
	)
}
