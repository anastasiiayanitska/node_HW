document.getElementById("checkAge").onclick = async () => {
  const age = parseInt(document.getElementById("ageInput").value);
  const res = await fetch("http://localhost:3000/api/age", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ age }),
  });
  const data = await res.json();
  document.getElementById("ageResult").innerText = data.message;
};
