import React from 'react'
import Card from '@/components/Card'
import { Input } from '@/components/ui/Input'

const page = () => {
  return (
    <main className=' flex flex-col items-center'>
        <h1 className=" text-7xl font-bold m-4">Input</h1>
        <section>
            <Card>
                <h2 className="text-2xl font-medium p-2">Size</h2>
                <div className='flex flex-row space-x-12 > * + *'>
                    <div>
                        <h3>Small</h3>
                        <Input placeholder='Placeholder' size='small' />
                    </div>
                    <div>
                        <h3>Default</h3>
                        <Input placeholder='Placeholder' size='default' />
                    </div>
                    <div>
                        <h3>Large</h3>
                        <Input placeholder='Placeholder' size='large' />
                    </div>
                </div>
            </Card>
        </section>
    </main>
  )
}

export default page