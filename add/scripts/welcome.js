document.getElementById("getWelcome").addEventListener("click", async () => {
  const response = await fetch("http://localhost:3000/api/welcome");
  const data = await response.json();
  document.getElementById("welcomeMessage").innerText = data.message;
});

document.getElementById("getUsers").addEventListener("click", async () => {
  const response = await fetch("http://localhost:3000/api/users");
  const data = await response.json();
  const userList = document.getElementById("userList");
  userList.innerHTML = "";
  data.users.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = user;
    userList.appendChild(li);
  });
});
