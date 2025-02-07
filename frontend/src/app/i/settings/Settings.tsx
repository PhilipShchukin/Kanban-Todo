'use client'

import { SubmitHandler, useForm } from 'react-hook-form'

import { useInitialData } from './useInitialData'
import { useUpdateSettings } from './useUpdateSettings'
import { Button } from '@/components/ui/buttons/Button'
import { Field } from '@/components/ui/fields/Field'
import { TypeUserForm } from '@/types/auth.types'

export function Settings() {
	const { register, handleSubmit, reset } = useForm<TypeUserForm>({
		mode: 'onChange'
	})

	useInitialData(reset)

	const { mutate, isPending } = useUpdateSettings()

	const onSubmit: SubmitHandler<TypeUserForm> = data => {
		const { password, ...rest } = data
		console.log(data)
		mutate({
			...rest,
			password: password || undefined
		})
	}

	return (
		<div>
			<form
				className='w-2/4'
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className='grid grid-cols-2 gap-10'>
					<div>
						<Field
							id='email'
							label='Email'
							placeholder='Enter email:'
							type='email'
							{...register('email', {
								required: 'Email is required'
							})}
							extra='md-4'
						/>
						<Field
							id='name'
							label='Name:'
							placeholder='Enter name:'
							{...register('name')}
							extra='md-4'
						/>
						<Field
							id='password'
							label='Password:'
							placeholder='Enter password:'
							type='password'
							{...register('password')}
							extra='md-10'
						/>
					</div>
					<div>
						<Field
							id='workInterval'
							label='Work interval (min.):'
							placeholder='Enter work interval(min.):'
							isNumber
							{...register('workInterval', {
								valueAsNumber: true
							})}
							extra='md-4'
						/>
						<Field
							id='breakInterval'
							label='Break interval (min.):'
							placeholder='Enter break interval(min.):'
							isNumber
							{...register('breakInterval', {
								valueAsNumber: true
							})}
							extra='md-4'
						/>
						<Field
							id='intervalsCount'
							label='Intervals count (max 10):'
							placeholder='Enter intervals count (max 10):'
							isNumber
							{...register('intervalsCount', {
								valueAsNumber: true
							})}
							extra='md-6'
						/>
					</div>
				</div>
				<Button
					type='submit'
					disabled={isPending}
				>
					Save
				</Button>
			</form>
		</div>
	)
}
