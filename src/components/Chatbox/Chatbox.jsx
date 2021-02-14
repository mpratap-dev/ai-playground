import './Chatbox.css';
import ChatInput from './ChatInput';

const Chatbox = () => {
  return (
    <div className="col-8 mx-auto chatbox-container">
      <div className="chat-wrapper">
        <div className="chat-screen">
        </div>
        <ChatInput />
      </div>
    </div>
  )
}

export default Chatbox;