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
    setMessages(await getMessages());
  }

  function updateStatus(key, value) {
    setStatus(prev => {
      const newStatus = { ...prev, [key]: value };

      newStatus.mood = calculateMood(newStatus);

      return newStatus;
  });
}

function calculateMood(s) {
  if (s.energy > 70 && s.temperature < 38) return "happy";
  if (s.energy < 40) return "tired";
  if (s.temperature > 39) return "tired";
  if (s.heartbeat > 140) return "confused";
  return "fine";
}

  return(
    <Home
    status={status}
    updateStatus={updateStatus}
    messages={messages}
    text={text}
    setText={setText}
    handleSend={handleSend}
  />
  )
  
}

export default App;