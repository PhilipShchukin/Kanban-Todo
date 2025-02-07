import { Metadata } from 'next'

import { Pomodoro } from './Pomodoro'
import { Heading } from '@/components/ui/Heading'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Timer',
	...NO_INDEX_PAGE
}

export default function TimerPage() {
	return (
		<div>
			<Heading title='Timer' />
			<Pomodoro />
		</div>
	)
}
