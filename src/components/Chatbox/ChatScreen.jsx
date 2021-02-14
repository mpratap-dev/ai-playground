import userImage from '../../assets/img/man.png';
import botImage from '../../assets/svg/bot.svg';

const ChatScreen = ({chats}) => {
  return (
    <div className="chat--screen">
      {chats.map(({sender, message}, index) => (
        <div key={`message_${index}`} className={`chat--row ${sender}`}>
          <img 
            src={sender === 'bot' ? botImage : userImage} 
            className="chat--img" 
            alt="user_image"
          />
          <p className="chat--bubble">{message}</p>
        </div>
      ))}
    </div>
  )
}

export default ChatScreen;