
import './ChatList.scss'
import { IncommingChat } from './IncommingChat'
import { OutgoingChat } from './OutgoingChat'

export const ChatList = () => {
    return (
        <section className='chat-wrapper p-6'>
            <ul className='chats flex flex-col'>
                <IncommingChat></IncommingChat> 
                <OutgoingChat></OutgoingChat>
                <IncommingChat></IncommingChat> 
                <OutgoingChat></OutgoingChat>
                <IncommingChat></IncommingChat> 
                <OutgoingChat></OutgoingChat>
                <IncommingChat></IncommingChat> 
                <OutgoingChat></OutgoingChat>
            </ul>
        </section>
    )
}
