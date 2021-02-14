import { useState } from "react";
import postData from "../../api";

const SUBMIT_URL = 'https://shrouded-oasis-94153.herokuapp.com/';

const ChatInput = () => {
  const [reply, setReply] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      code: `(function name (param) {return param;})('${reply}')`
    }
    const response = await postData(SUBMIT_URL, data);
    console.log(response);
  }

  const handleChange = ({target}) => setReply(target.value);

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