import { createContext } from "react";


export const AuthContext = createContext({
    userId: '',
    username: '',
    emai: '',
    accessToken: '',
    isAuthenticated: false,
    changeAuthState: () => null
});