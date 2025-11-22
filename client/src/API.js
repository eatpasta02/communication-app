const API_URL = "http://localhost:5000";

export async function getStatus() {
  const res = await fetch(`${API_URL}/status`);
  return res.json();
}

export async function getMessages() {
  const res = await fetch(`${API_URL}/messages`);
  return res.json();
}

export async function sendMessage(message) {
  const res = await fetch(`${API_URL}/messages`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  });
  return res.json();
}