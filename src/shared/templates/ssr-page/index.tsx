import { GetServerSideProps, NextPage } from 'next'

export const getServerSideProps: GetServerSideProps = async () => {
	return {
		props: {},
	}
}

export interface FileNamePageProps {}

const FileName: NextPage<FileNamePageProps> = ({}) => {
	return <div>FileName</div>
}

export default FileName
