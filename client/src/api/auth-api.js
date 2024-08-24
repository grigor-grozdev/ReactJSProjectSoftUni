
import *as request from "./requester";

const BASE_URL = `${import.meta.env.VITE_API_URL}/users`;

export const login = async (email, password) => request.post(`${BASE_URL}/login`, { email, password });

export const register = async (username, email, password) => request.post(`${BASE_URL}/register`, { username, email, password });

export const logout = async () => request.get(`${BASE_URL}/logout`)

