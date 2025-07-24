const BASE_URL =
  "https://mindx-mockup-server.vercel.app/api/resources/user?apiKey=68501d268b20679b19d90028";

export async function fetchUsers() {
  const res = await fetch(BASE_URL);
  const json = await res.json();
  return json.data.data;
}

//Login
export async function checkLogin({ username, password }) {
  const users = await fetchUsers();
  const foundUser = users.find(
    (u) => u.username === username && u.password === password
  );
  return foundUser ?? null;
}
//Sign
export async function createUser(userData) {
  const reponse = await fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify(userData),
  });
  return await reponse.json();
}
