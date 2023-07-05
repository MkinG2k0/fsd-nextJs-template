// import { Card } from 'antd'
import { ReactNode } from 'react'

import { cn } from 'shared/lib/cn'

interface BlockProps {
	className?: string
	heading: ReactNode
}

export const WrapCard: FC<BlockProps> = ({ children, className, heading }) => {
	const cnCard = cn('w100', className)

	return (
		<div
			// title={heading}
			// size={'small'}
			// bordered={true}
			className={cnCard}
		>
			{children}
		</div>
	)
}
