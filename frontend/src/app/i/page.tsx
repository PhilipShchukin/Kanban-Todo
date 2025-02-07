import type { Metadata } from 'next'

import { Statistics } from './Statistics'
import Layout from './layout'
import { Heading } from '@/components/ui/Heading'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Dashboard',
	...NO_INDEX_PAGE
}

export default function DashboardPage() {
	return (
		<div>
			{/* <Layout> */}
			<Heading title='Statistics' />
			<Statistics />
		</div>
		// </Layout>
	)
}
