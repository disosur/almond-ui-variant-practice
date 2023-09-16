import React, {forwardRef} from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { twMerge } from 'tailwind-merge'



const variants = cva([

], {
    variants: {
        size: {
            small: [
                'p-1',
                'text-sm',
                'bg-zinc-50',
                'hover:bg-zinc-100'
            ],
            default: [
                'p-2',
                'text-lg',
                'bg-zinc-50',
                'hover:bg-zinc-100'
            ],
            large: [
                'p-4',
                'text-xl',
                'bg-zinc-50',
                'hover:bg-zinc-100'
            ]
        },
    },
    defaultVariants: {
        size: 'default',
    }
})

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & VariantProps<typeof variants> & {

}


const Input = forwardRef<HTMLInputElement, InputProps>(
    ({placeholder, size}, ref) => {
        return(
            <>
                <input ref={ref} type="text" placeholder={placeholder} className={twMerge(variants({size}))} />
            </>
        )
})

Input.displayName = 'Input'

export { Input }