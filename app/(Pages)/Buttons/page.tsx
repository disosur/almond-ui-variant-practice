import React from 'react'
import Card from '@/components/Card'
import { Button } from '@/components/ui/Button'

const page = () => {
  return (
    <main className=' flex flex-col items-center'>
        <h1 className=" text-7xl font-bold">Buttons</h1>
        <section>
            <Card>
                <h2 className="text-2xl font-medium p-2">Variant</h2>
                <div className='flex flex-row space-x-12 > * + *'>
                    <div>
                        <h3>default</h3>
                        <Button variant="default">Button</Button>
                    </div>
                    <div>
                        <h3>outline</h3>
                        <Button variant="outline">Button</Button>
                    </div>
                    <div>
                        <h3>text</h3>
                        <Button variant="text">Button</Button>
                    </div>
                </div>
            </Card>
        </section>
        <section>
            <Card>
                <h2 className="text-2xl font-medium p-2">Size</h2>
                <div className='flex flex-row space-x-12 > * + *'>
                    <div>
                        <h3>Small</h3>
                        <Button size="small">Button</Button>
                    </div>
                    <div>
                        <h3>Default</h3>
                        <Button size="default">Button</Button>
                    </div>
                    <div>
                        <h3>Large</h3>
                        <Button size="large">Button</Button>
                    </div>
                </div>
            </Card>
        </section>
    </main>
  )
}

export default page