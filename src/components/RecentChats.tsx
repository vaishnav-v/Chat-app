import "./RecentChats.scss";
import { ChatRecentUser } from './ChatRecentUser';
import { SearchIcon } from '@chakra-ui/icons';
// import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { USERLIST } from '../mock-data/users';
import { UserChatPreview } from '../models/user';

export const RecentChats = () => {



    return (

        <div className='recent-chats flex flex-col overflow-hidden'>
            <div className="heading">
                Chats
            </div>

            <div className="filter py-4">
                <div className="box">
                    <SearchIcon color='#948afe' />
                    <input type="text" name="search" placeholder="Search anyone..." />
                </div>
            </div>
            <div className="content flex flex-col flex-1 overflow-auto">
                <div className="item overflow-hidden flex flex-col">
                    <div className="header mb-4">
                        Recent
                    </div>
                    <ul className="user-list flex-1 overflow-auto">
                        {
                            USERLIST.map((user: UserChatPreview) => {
                                return (<ChatRecentUser user={user} />)
                            })
                        }
                    </ul>
                </div>
            </div>



            {/* <div className="filters">
                <InputGroup borderRadius='6px' bg='white'>
                    <InputLeftElement pointerEvents='none'>
                        <SearchIcon color='gray.300' />
                    </InputLeftElement>
                    <Input type='tel' placeholder='Search' />
                </InputGroup>
            </div>
            <div className="chat-list overflow-auto">
                {
                    USERLIST.map((user:UserChatPreview) => {
                        return (<ChatRecentUser user={user} />)
                    })
                }
            </div> */}
        </div>


    )
}
