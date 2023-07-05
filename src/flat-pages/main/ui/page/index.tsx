'use client'
import { FC } from 'react'

import { Button } from '@mui/material'

interface MainProps {}

export const Main: FC<MainProps> = ({}) => {
	return (
		<div className={'p-2'}>
			<Button variant={'contained'}>Hello World</Button>
		</div>
	)
}
