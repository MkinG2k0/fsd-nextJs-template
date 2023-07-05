import { Layout } from 'entities/layout/'

export const WithLayout = (children: PropsWithChildren<any>) => () => <Layout>{children}</Layout>
