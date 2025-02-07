'use client'

import { useIsFetching, useIsMutating } from '@tanstack/react-query'

import Loader from '../../Loader'

export function GlobalLoader() {
	const isMutating = useIsMutating()
	const isFetching = useIsFetching()

	return isFetching || isMutating ? (
		<div className='fixed top-layout right-Layout z-50'>
			<Loader />
		</div>
	) : null
}
