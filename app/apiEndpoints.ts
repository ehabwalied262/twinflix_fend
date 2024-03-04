const API_BASE_URL = "http://localhost:5000/api";

export const ENDPOINTS = {
  REGISTER: `${API_BASE_URL}/auth/register`,
  LOGIN: `${API_BASE_URL}/auth/login`,
  ME: `${API_BASE_URL}/auth/me`,
  LOGOUT: `${API_BASE_URL}/auth/logout`,
  FORGOT_PASSWORD: `${API_BASE_URL}/auth/forgot-password`,
  GET_MOVIES: `${API_BASE_URL}/get-movies`,
  GET_SHOWS: `${API_BASE_URL}/get-shows`
};