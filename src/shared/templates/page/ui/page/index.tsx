import { FC } from 'react'

import style from './FileName.module.scss'

interface FileNameProps {}

export const Todo: FC<FileNameProps> = () => {
	return <div className={style.wrap}>FileName</div>
}
