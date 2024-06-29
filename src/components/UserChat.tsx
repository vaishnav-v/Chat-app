
import { WrapItem, Avatar, Button } from '@chakra-ui/react'
import './UserChat.scss'
import { ChatList } from './ChatList'

export const UserChat = () => {
  return (
    <div className='user-chat-wrapper flex-1 flex flex-col bg-white'>
      <div className="user-header flex">
        <div className="user-icon mx-2 flex items-center justify-center">
          <WrapItem>
            <Avatar size='sm' name="Aswin" />
          </WrapItem>
        </div>
        <div className="username flex-1 flex items-center justify-start">
          <span>
            Alex Joseph
          </span>
        </div>
        <ul className="actions flex">
          <li className='action-item'>
            <Button colorScheme='teal' variant='ghost'>
              <i className="ri-search-line"></i>
            </Button>
          </li>
          <li className='action-item'>
            <Button colorScheme='teal' variant='ghost'>
              <i className="ri-phone-line"></i>
            </Button>
          </li>
          <li className='action-item'>
            <Button colorScheme='teal' variant='ghost'>
              <i className="ri-vidicon-line"></i>
            </Button>
          </li>
          <li className='action-item'>
            <Button colorScheme='teal' variant='ghost'>
              <i className="ri-user-2-line"></i>
            </Button>
          </li>
          <li className='action-item'>
            <Button colorScheme='teal' variant='ghost'>
              <i className="ri-more-fill"></i>
            </Button>
          </li>
        </ul>
      </div>
      <div className="chat-list flex-1 overflow-auto">
        <ChatList></ChatList>
      </div>

    </div>
  )
}
