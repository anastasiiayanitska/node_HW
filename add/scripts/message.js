document.getElementById("sendMessage").onclick = async () => {
  const message = document.getElementById("messageInput").value;
  const res = await fetch("http://localhost:3000/api/message", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });
  const data = await res.json();
  document.getElementById(
    "confirmation"
  ).innerText = `Received: ${data.message}`;
};
