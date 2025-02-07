import cn from 'clsx'
import { type InputHTMLAttributes, forwardRef } from 'react'

type TypeTransparentField = InputHTMLAttributes<HTMLInputElement>

export const TransparentField = forwardRef<
	HTMLInputElement,
	TypeTransparentField
>(({ className, ...rest }, ref) => {
	return (
		<input
			className={cn(
				'bg-transparent border-none focus:outline-0 focus:shadow-transparent w-full',

				className
			)}
			style={{
				backgroundColor: '#0e0f0f'
			}}
			ref={ref}
			{...rest}
		/>
	)
})

TransparentField.displayName = 'TransparentField'
