import { createContext, useState } from "react";
import usePersistedState from "../hooks/usePersistedState";


export const AuthContext = createContext({
    userId: '',
    username: '',
    emai: '',
    accessToken: '',
    isAuthenticated: false,
    changeAuthState: () => null
});

export function AuthContextProvider(props) {
    // const [authState, setAuthState] = useState({});
    const [authState, setAuthState] = usePersistedState('auth', {});

    const changeAuthState = (state) => {
        localStorage.setItem('accessToken', state.accessToken);

        setAuthState(state);
    }

    const contextData = {
        userId: authState._id,
        username: authState.username,
        emai: authState.emai,
        accessToken: authState.accessToken,
        isAuthenticated: !!authState.email,
        changeAuthState
    }

    return (
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    )
}