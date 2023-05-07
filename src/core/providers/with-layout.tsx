import { Layout } from 'entities/layout/'

export const WithLayout = (component: FC) => (props) => <Layout>{component(props)}</Layout>
