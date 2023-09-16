import React, {forwardRef} from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { twMerge } from 'tailwind-merge'



const variants = cva([

], {
    variants: {
        variant: {
            default: [
                'cursor-pointer',
                'rounded-lg',
                'hover:bg-sky-400',
                'bg-sky-500',
                'text-white'
            ],
            outline: [
                'border-solid',
                'border-2',
                'border-gray-900',
                'rounded-lg',
                'hover:bg-gray-50',
            ],
            text: [
                'underline',
                'rounded-lg',
                'hover:bg-gray-50',
                'hover:text-sky-500'
            ]
        },
        size: {
            small: [
                'text-sm',
                'px-2',
                'py-1 '
            ],
            default: [
                'text-lg',
                'px-4',
                'py-2 '
            ],
            large: [
                'text-2xl',
                'px-4',
                'py-2 '
            ]
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'default',
    }
})

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof variants> & {

}


const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({children, variant, size}, ref) => {
        return(
            <>
                <button ref={ref} className={twMerge(variants({variant, size}))}>
                    {children}
                </button>
            </>
        )
})

Button.displayName = 'Button'

export { Button }