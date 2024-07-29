import *as request from "./requester";

const BASE_URL = 'http://localhost:3030/users';

export const login = async (email, password) => request.post(`${BASE_URL}/login`, { email, password });

export const register = async (username, email, password) => request.post(`${BASE_URL}/register`, { username, email, password });

export const logout = () => request.get(`${BASE_URL}/logout`)
