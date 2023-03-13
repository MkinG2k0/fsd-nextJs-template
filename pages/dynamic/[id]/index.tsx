import { useRouter } from 'next/router'

const Index = () => {
	const router = useRouter()
	const { id } = router.query

	return <div>path {id}</div>
}

export default Index
