// import { Card } from 'antd'
import { ReactNode } from 'react'

import { cn } from 'shared/lib/cn'

interface BlockProps {
	heading: ReactNode
	className?: string
}

export const WrapCard: FC<BlockProps> = ({ heading, children, className }) => {
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
