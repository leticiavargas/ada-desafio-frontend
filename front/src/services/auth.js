import api from "./api";

const CREDENTIAL = { login: 'letscode', senha: 'lets@123' };
const TOKEN_KEY = "@kanban-token";


export const getToken = async () => {
  let token = localStorage.getItem(TOKEN_KEY);
  if(token)
    return token
  else
    return await authenticate()
};

async function authenticate() {
  try {
    const response = await api.post('login', CREDENTIAL);
    localStorage.setItem(TOKEN_KEY, response.data);
    return response.data;
  } catch (err) {
    console.log(err)
  }
}

export const clearToken = () => localStorage.removeItem(TOKEN_KEY);



