import { createContext } from "react";


export const AuthContext = createContext({
    emai: '',
    accessToken: '',
    isAuthenticated: false,
    changeAuthState: () => null
});