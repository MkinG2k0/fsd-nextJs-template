import { useRouter } from 'next/router'

const Page = () => {
	const router = useRouter()
	const { id } = router.query

	return <div>path {id}</div>
}

export default Page
