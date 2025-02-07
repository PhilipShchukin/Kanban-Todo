import dayjs from 'dayjs'
import type { DateFormatter } from 'react-day-picker'

const seasonEmoji: Record<string, string> = {
	winter: '⛄',
	spring: '🌷',
	summer: '🌴',
	autumn: '🍁'
}

const getSeason = (month: Date): keyof typeof seasonEmoji => {
	const mouthNumber = month.getMonth() + 1

	if (mouthNumber > 2 && mouthNumber < 6) return 'spring'
	if (mouthNumber > 5 && mouthNumber < 9) return 'summer'
	if (mouthNumber > 8 && mouthNumber < 12) return 'autumn'
	else return 'winter'
}

export const formatCaption: DateFormatter = month => {
	const season = getSeason(month)

	return (
		<>
			<span
				role='img'
				aria-label={season}
				className='mr-2'
			>
				{seasonEmoji[season]}
			</span>
			{dayjs(month).format('MMMM')}
		</>
	)
}
