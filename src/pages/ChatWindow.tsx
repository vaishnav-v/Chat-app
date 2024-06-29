
import { RecentChats } from '../components/RecentChats'
import { UserChat } from '../components/UserChat'

export const ChatWindow = () => {
  return (
    <div className='flex h-full'>
        <RecentChats/>
        <UserChat/>
    </div>
  )
}
