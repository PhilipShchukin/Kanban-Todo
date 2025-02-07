import { forwardRef } from 'react'

interface InputFieldProps {
	id: string
	label: string
	extra?: string
	placeholder: string
	variant?: string
	state?: 'error' | 'success'
	disabled?: boolean
	type?: string
	isNumber?: boolean
}

export const Field = forwardRef<HTMLInputElement, InputFieldProps>(
	(
		{
			id,
			label,
			extra,
			placeholder,
			variant,
			state,
			disabled,
			type,
			isNumber,
			...rest
		},
		ref
	) => {
		return (
			<div className={`${extra}`}>
				<label
					htmlFor={id}
					className={`text-sm text-white/60 dark:text-white ml-1.5 font-medium`}
				>
					{label}
				</label>
				<input
					ref={ref}
					disabled={disabled}
					type={type}
					id={id}
					placeholder={placeholder}
					className={`mt-2 flex w-full items-center justify-center rounded-lg border border-border bg-white/0 p-3 text-base outline-none placeholder:text-white/30 placeholder:font-normal duration-500 transition-colors focus:border-primary text-white ${
						disabled == true
							? 'border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]'
							: state == 'error'
								? 'border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400'
								: state == 'success'
									? 'border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400'
									: ''
					}`}
					onKeyDown={event => {
						if (
							isNumber &&
							!/[0-9]/.test(event.key) &&
							event.key !== 'Backspace' &&
							event.key !== 'Tab' &&
							event.key !== 'Enter' &&
							event.key !== 'ArrowLeft' &&
							event.key !== 'ArrowRight'
						) {
							event.preventDefault()
						}
					}}
					{...rest}
				></input>
			</div>
		)
	}
)
Field.displayName = 'field'

// js 30 leetCode

//1
// var createHelloWorld = () => 'Hellow World'

//2
// var createCounter = (n)=>()=> n++

//3 To Be Or Not To Be

// var expect = (theVal)=>{
// 	return(
// 		{
// 			toBe: (theTargetVal)=>{
// 				if (theVal!==theTargetVal){
// 					throw 'Not Equal'
// 				}
// 				return true
// 			},
// 			notToBe: (theTargetVal)=>{
// 				if (theVal == theTargetVal){
// 					throw 'Equal'
// 				}
// 				return true
// 			}
// 		}
// 	)
// }

//4 Counter 2

// var createCounter = init => {
// 	var currentValue = init
// 	return {
// 		increment: () => ++currentValue,
// 		reset: () => (currentValue = init),
// 		decrement: () => --currentValue
// 	}
// }

//5 Aplly Transform Over Each Element

// var map = function (arr,fn){

// }

//6 Allow One Function Call

// var once = (fn)=>{
// 	var theAllReadyRunning = 0

// 	fn = fn.apply.bind(fn,null)
// 	return(
// 		(...args) => (
// 			theAllReadyRunning ? undefined :
// 			( theAllReadyRunning = 1, fn.apply(null,args))
// 		)
// 	)
// }
