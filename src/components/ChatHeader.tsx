import { FC } from 'react'

interface ChatHeaderProps {

}

const ChatHeader: FC<ChatHeaderProps> = ({}) => {
  return <div className='w-full flex gap-3 justify-start items-center text-slate-900'>
    <div className='flex flex-col gap-2 items-start text-sm'>
        <div className='flex gap-1.5 items-center'>
            <p className='w-2 h-2 rounded-full bg-green-500'/>
            <p className='font-normal font-outfit'>Any Queries?</p>
        </div>
    </div>
  </div>
}

export default ChatHeader
