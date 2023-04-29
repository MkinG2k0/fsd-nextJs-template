import style from './style.module.scss'

interface SkeletonProps {
	width?: string | number
	height?: string | number
}

export const Skeleton: FC<SkeletonProps> = ({ width, height }) => {
	return <div className={style.wrap} style={{ width, height }}></div>
}
Skeleton.defaultProps = {
	width: '100%',
	height: '100%',
}
