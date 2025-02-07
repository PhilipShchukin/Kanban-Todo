import { GanttChartSquare } from 'lucide-react'
import Link from 'next/link'

import { LogoutButton } from './LogoutButton'
import { MenuItem } from './MenuItem'
import { MENU } from './menu.data'
import { COLORS } from '@/constants/color.constants'

export function Sidebar() {
	return (
		<aside className='border-r border-r-border h-full bg-sidebar flex flex-col justify-between'>
			<div>
				<Link
					href='/'
					className='flex items-center gap-2.5 p-Layout border-b border-b-border'
				>
					<GanttChartSquare
						color={COLORS.primary}
						size={38}
					/>
					<span className='text-1.4xl font-bold relative '>
						Kanban Planner
						<span className='absolute -top-2 -right-6 text-xs opacity-40 rotate-[18deg] font-normal'>
							beta
						</span>
					</span>
				</Link>
				<div className='p-3 relative'>
					<LogoutButton />
					{MENU.map(item => (
						<MenuItem
							item={item}
							key={item.link}
						/>
					))}
				</div>
			</div>
			<footer className='text-xs opacity-40 font-normal text-center p-Layout'>
				2024 &copy; With love from
				<a
					href=''
					target='_blank'
					rel='noreferrer'
					className='hover:text-primary text-brand-300 transition-colors'
				></a>
				<br /> All rights reserved.
			</footer>
		</aside>
	)
}
