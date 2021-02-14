import { useState } from 'react';
import './Chatbox.css';
import ChatInput from './ChatInput';
import ChatScreen from './ChatScreen';

const Chatbox = () => {
  const [chats, setChats] = useState([]);

  return (
    <div className="col-8 mx-auto chatbox-container">
      <div className="chat-wrapper">
        <ChatScreen chats={chats}/>
        <ChatInput chats={chats} setChats={setChats} />
      </div>
    </div>
  )
}

export default Chatbox;