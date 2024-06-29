import { WrapItem, Avatar } from '@chakra-ui/react'
import './IncommingChat.scss'


export const IncommingChat = () => {
    return (
        <li className='incomming-chat flex items-end'>
            <div className="user mr-2">
                <WrapItem>
                    <Avatar size='sm' name="Aswin k" />
                </WrapItem>
            </div>
            <div className="chat-data flex flex-col">
                <div className="chat-content">
                    <div className="message">
                        Good Morning
                    </div>
                    <div className="time sent">
                        <i className="ri-time-line">
                        </i>
                        <span>9: 30</span>
                    </div>
                </div>
                <div className="user-name-text">
                    Alex Joseph
                </div>
            </div>
        </li>
    )
}
