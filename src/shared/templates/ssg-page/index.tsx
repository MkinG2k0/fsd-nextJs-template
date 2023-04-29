import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [],
		fallback: true,
	}
}

export const getStaticProps: GetStaticProps = () => {
	return {
		props: {},
	}
}

export interface FileNamePageProps {}

const FileNamePage: NextPage<FileNamePageProps> = ({}) => {
	return <div>FileName</div>
}

export default FileNamePage
