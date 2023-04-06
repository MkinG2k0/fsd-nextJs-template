import { FC } from 'react'
import { Button } from '@mui/material'

import style from './main.module.scss'

interface mainProps {}

export const Main: FC<mainProps> = ({}) => {
	return (
		<div className={style.wrap}>
			<Button variant="contained">Hello World</Button>
		</div>
	)
}
