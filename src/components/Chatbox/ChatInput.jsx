import { useContext, useEffect, useState } from "react";
import postData from "../../api";
import { AppContext } from "../../contexts/AppContext";

const SUBMIT_URL = 'https://shrouded-oasis-94153.herokuapp.com/';

const ChatInput = ({chats, setChats}) => {
  const [reply, setReply] = useState('');
  const {tabState} = useContext(AppContext);
  const {tabs} = tabState;

  const handleSubmit = (event) => {
    event.preventDefault();
    setChats([
      ...chats, 
      { id: chats.length, sender: 'user', message: reply, status: 'done'}, 
      {id: chats.length+1, sender: 'bot', message: '...', status: 'pending'}
    ]);
  }

  const handleChange = ({target}) => setReply(target.value);

  const sendCodeToServer = async () => {
    const firstTabData = tabs.find(tab => !tab.id);
    const data = { code: `(${firstTabData.code})('${encodeURIComponent(reply)}')` };
    const {status, text} = await postData(SUBMIT_URL, data);
    
    setReply('');
    console.log(status, text);
    if(status === 200) {
      const stateToSet = chats.map(({id, sender, message, status}) => ({
        id,
        sender,
        message: (id === chats.length - 1 && sender === 'bot') ? text : message,
        status: (id === chats.length - 1 && sender === 'bot') ? 'done' : status
      }));
  
      setChats(stateToSet);
    } else {
      setChats(chats.filter(chat => chat.status !== 'pending'))
    }
  }

  useEffect(() => {
    const lastMessage = chats[chats?.length - 1];
    const isPending = lastMessage?.status === 'pending';
    console.log('chats: ', isPending)
    if(isPending) {
      sendCodeToServer();
    }
  }, [chats]);

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        className="chat-input" 
        onChange={handleChange}
        value={reply}
        placeholder="Type a message"
      />
    </form>
  )
}

export default ChatInput;