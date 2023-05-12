"use client"

import { FC } from 'react'
import { Accordion, AccordionContent, AccordionTrigger } from '@/components/ui/accordion'
import { AccordionItem } from '@radix-ui/react-accordion'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'
import ChatMessages from './ChatMessages'

const Chat: FC = ({}) => {
  return (
    <Accordion
      type='single'
      collapsible
      className='relative bg-white z-40 shadow left-8'>
        <AccordionItem value='item-1'>
            <div className='fixed lg:right-8 phone:w-10/12 lg:w-1/5 bottom-8 bg-white bg-opacity-95 border border-stone-50 rounded-md'>
              <div className='w-full h-full flex flex-col'>
                <AccordionTrigger className='px-6 border-b border-zinc-300'>
                  <ChatHeader />
                </AccordionTrigger>
                <AccordionContent>
                  <div className='flex flex-col h-80'>
                    <ChatMessages className='px-2 py-3 flex-1' />
                    <ChatInput className='px-4'/>
                  </div>
                </AccordionContent>
              </div>
            </div>
        </AccordionItem>
    </Accordion>
  )
}

export default Chat
