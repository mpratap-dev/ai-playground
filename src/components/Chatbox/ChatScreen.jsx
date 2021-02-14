import { useEffect, useRef } from 'react';
import userImage from '../../assets/img/man.png';
import botImage from '../../assets/svg/bot.svg';

const ChatScreen = ({ chats }) => {
  const messageContainer = useRef(null);

  useEffect(() => {
    const chatRows = messageContainer?.current?.children;
    const newMessageRow = chatRows[chats.length - 1];
    newMessageRow?.scrollIntoView({behavior: 'smooth'})
  }, [chats]);

  return (
    <div className={`chat--screen ${!chats.length ? 'empty-chat': ''}`} ref={messageContainer}>
      {chats.length
        ? chats.map(({ sender, message, status }, index) => (
          <div key={`message_${index}`} className={`chat--row ${sender}`}>
            <img
              src={sender === 'bot' ? botImage : userImage}
              className="chat--img"
              alt="user_image"
            />
            <p className={`chat--bubble ${status === 'pending' ? 'pending' : ''}`}>
              {status !== 'pending' 
                ? message
                : (
                  <>
                    <span className="dots"></span>
                    <span className="dots"></span>
                    <span className="dots"></span> 
                  </>
                )
              }
            </p>
          </div>
        ))
        : <span className="no-message">No messages here yet</span>
      }
    </div>
  )
}

export default ChatScreen;