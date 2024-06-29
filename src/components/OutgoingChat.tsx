
import { WrapItem, Avatar } from '@chakra-ui/react';
import './OutgoingChat.scss';

export const OutgoingChat = () => {
    return (
        <li className='outgoing-chat flex items-end justify-end'>
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
                    Alen watt
                </div>
            </div>
            <div className="user mr-2">
                <WrapItem>
                    <Avatar size='sm' name="Aswin k" />
                </WrapItem>
            </div>

        </li>
    )
}
