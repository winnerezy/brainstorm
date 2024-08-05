import { Header } from '@/components/Header'
import { TopicTabs } from '@/components/TopicTabs'
import React from 'react'

export default function Topics() {
  return (
    <section className='flex flex-col items-center gap-16'>
        <Header/>
        <div className='flex flex-col w-full gap-6 items-center mt-10'>
        <h3 className='font-[800] text-4xl lg:text-5xl tracking-wide w-full max-w-[800px] text-center leading-[40px] '>Find A Topic And Talk About It!</h3>
        <p className='w-[400px] text-center'>Create a topic or comment on existing topic threads. Star your favourite topics</p>
        </div>
        <section>
          <TopicTabs/>
        </section>
    </section>
  )
}
