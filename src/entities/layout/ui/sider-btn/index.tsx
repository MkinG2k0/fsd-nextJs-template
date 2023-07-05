'use client'
import { FC } from 'react'

import { LayoutSlice } from 'entities/layout/model'

import MenuIcon from '@mui/icons-material/Menu'
import { Button } from '@mui/material'
import { dispatch } from 'core'

interface sideBtnProps {}

export const SiderBtn: FC<sideBtnProps> = ({}) => {
	const { sideCollapsed } = LayoutSlice.useGet()

	const onCollapse = () => {
		dispatch(LayoutSlice.setSideCollapsed())
	}

	return (
		<div className={'bg-gray-800 flex items-center justify-center w-20 flex-grow-0 flex-shrink-0'}>
			<Button className={'align-top text-white'} onClick={onCollapse}>
				<MenuIcon />
				{/* {sideCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}*/}
			</Button>
		</div>
	)
}
