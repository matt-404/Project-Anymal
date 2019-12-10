import axios from 'axios';

// const baseUrl = "https://.herokuapp.com"
const baseUrl = "http://localhost:3000"

const api = axios.create({
  baseURL: baseUrl
});

// ============== Auth ================
export const registerUser = async (registerData) => {
  try {
    const response = await api.post('/register', { user: registerData });
    api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;
    localStorage.setItem('authToken', response.data.token);
    return response.data.user;
  } catch (e) {
    return { error: "Invalid Credentials" };
  }
}

export const loginUser = async (loginData) => {
  try {
    const response = await api.post('/login', loginData);
    api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;
    localStorage.setItem('authToken', response.data.token);
    return response.data.user;
  } catch (e) {
    return { error: "Invalid Credentials" };
  }
}

export const verifyUser = async () => {
  const token = localStorage.authToken;
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const response = await api.get('/verify');
    return response.data;
  }
  return false;
}

export const putUser = async (user_id, userData) => {
  const response = await api.put(`/users/${user_id}`, userData);
  return response.data;
}

// ============== Categories ================
export const getAllCategories = async () => {
  const response = await api.get('/categories');
  return response.data;
}

export const getOneCategory = async (category_id) => {
  const response = await api.get(`/categories/${category_id}`);
  return response.data;
}

export const getAllUserCategories = async (user_id) => {
  const response = await api.get(`/users/${user_id}/categories`);
  return response.data;
}

export const postCategory = async (user_id, categoryData) => {
  const response = await api.post(`/users/${user_id}/categories`, categoryData);
  return response.data;
}

export const putCategory = async (category_id, categoryData) => {
  const response = await api.put(`/categories/${category_id}`, categoryData);
  return response.data;
}

export const deleteCategory = async (category_id) => {
  const response = await api.delete(`/categories/${category_id}`);
  return response.data;
}

// ============== Posts ================
export const getAllPosts = async (category_id) => {
  const response = await api.get(`/categories/${category_id}/posts`)
  return response.data
}

export const postPost = async (category_id, postData) => {
  const response = await api.post(`/categories/${category_id}/posts`, { post: postData });
  return response.data
}

export const putPost = async (post_id, postData) => {
  const response = await api.put(`/categories/:category_id/posts/${post_id}`, postData);
  return response.data;
}

export const deletePost = async (post_id) => {
  const response = await api.delete(`/categories/:category_id/posts/${post_id}`);
  return response.data;
}