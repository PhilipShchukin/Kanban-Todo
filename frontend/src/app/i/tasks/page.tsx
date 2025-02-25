import { Metadata } from 'next'

import { TaskView } from './TaskView'
import { Heading } from '@/components/ui/Heading'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Tasks',
	...NO_INDEX_PAGE
}

export default function TasksPage() {
	return (
		<div>
			<Heading title='Tasks' />
			<TaskView />
		</div>
	)
}
