import style from './style.module.scss'

interface SkeletonProps {
	height?: number | string
	width?: number | string
}

export const Skeleton: FC<SkeletonProps> = ({ height, width }) => {
	return <div className={style.wrap} style={{ height, width }}></div>
}
Skeleton.defaultProps = {
	height: '100%',
	width: '100%',
}
