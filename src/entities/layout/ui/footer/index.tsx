import { Layout } from 'antd'

const WrapFooter = Layout.Footer

interface FooterProps {}

export const Footer: FC<FooterProps> = ({}) => {
	return (
		<WrapFooter className={'bg-gray-700 text-center text-white p-4'}>
			With Feature-Sliced Design
		</WrapFooter>
	)
}
