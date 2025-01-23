// import "dotenv/config";
// const API_URL = process.env.API_URL;
const API_URL = " http://localhost:3000";
export async function createUser(name, email) {
  const response = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email }),
  });

  if (!response.ok) {
    throw new Error("Failed to create user");
  }

  return response.json();
}
