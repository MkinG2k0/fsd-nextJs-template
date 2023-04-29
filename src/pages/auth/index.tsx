import { GetServerSideProps, NextPage } from 'next'

export const getServerSideProps: GetServerSideProps = async () => {
	return {
		props: {},
	}
}

export interface authPageProps {}

const auth: NextPage<authPageProps> = ({}) => {
	return <div>auth</div>
}

export default auth
