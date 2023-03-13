import { Card } from 'antd'
import { cn } from 'Helper/Style'
import { FC, ReactNode } from 'react'

interface BlockProps {
	heading: ReactNode
	className?: string
}

export const WrapCard: FC<BlockProps> = ({ heading, children, className }) => {
	const cnCard = cn('w100', className)

	return (
		<Card title={heading} size={'small'} bordered={true} className={cnCard}>
			{children}
		</Card>
	)
}
