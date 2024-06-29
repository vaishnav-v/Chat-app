

import './chatRecentUser.scss'
import { UserChatPreview } from '../models/user'
import { Avatar, WrapItem } from '@chakra-ui/react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ChatRecentUser = ({ user }: { user: UserChatPreview }) => {
    return (
        <li className="user-item flex">
            <div className="icon">
                <WrapItem>
                    <Avatar size='sm' name={user.userName} />{' '}
                </WrapItem>
            </div>
            <div className="middle-content flex-1 flex flex-col">
                <div className="user-name">
                    {user.userName}
                </div>
                <div className="recent-chat-content whitespace-nowrap">
                    Hey there ...I am available
                </div>
            </div>
            <div className="end flex flex-col">
                <div className="time">
                    5:30 AM
                </div>
                <div className="unread-count flex mr-1">
                    <div className="unread">
                        06
                    </div>
                </div>
            </div>

        </li>
    )
}
