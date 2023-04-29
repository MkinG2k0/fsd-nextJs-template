// import { Table } from 'antd'
// import { TableProps } from 'antd/es/table/InternalTable'
//
// interface WrapTableProps extends TableProps<{}> {
// 	onClickRow?: (data: object, index?: number) => void
// 	isManySelected?: boolean
// 	isSelected?: boolean
// }
//
// export const WrapTable: FC<WrapTableProps> = ({
// 	children,
// 	onClickRow,
// 	isManySelected,
// 	isSelected,
// 	...table
// }) => {
// 	const onClick = (
// 		event: React.MouseEvent<any, MouseEvent>,
// 		record: Record<string, any>,
// 		rowIndex?: number,
// 	) => {
// 		if (isSelected) {
// 			// @ts-ignore
// 			const parentElement = event.target.parentElement as HTMLElement
//
// 			if (!isManySelected) {
// 				const elements = Array.from(
// 					document.getElementsByClassName('tableRowChecked'),
// 				)
// 				elements.map((item) => {
// 					if (item !== parentElement) {
// 						item.classList.remove('tableRowChecked')
// 					}
// 				})
// 			}
//
// 			parentElement.classList.toggle('tableRowChecked')
// 		}
//
// 		onClickRow?.(record, rowIndex)
// 	}
//
// 	return (
// 		<Table
// 			bordered={true}
// 			pagination={false}
// 			onRow={(record, rowIndex) => ({
// 				onClick: (event) => {
// 					onClick(event, record, rowIndex)
// 				},
// 			})}
// 			{...table}
// 		>
// 			{children}
// 		</Table>
// 	)
// }

export {}
