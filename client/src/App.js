import { useEffect, useState } from "react";
import { getStatus, getMessages, sendMessage } from "./API";
import Home from "./components/Home";

function App() {
  const [status, setStatus] = useState({});
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    load();
  }, []);

  async function load() {
    setStatus(await getStatus());
    setMessages(await getMessages());
  }

  async function handleSend() {
    if (!text.trim()) return;
    await sendMessage(text);
    setText("");
    load();
  }

  return(
    <Home
      status={status}
      messages={messages}
      text={text}
      setText={setText}
      handleSend={handleSend}
    />
  )
  
}

export default App;