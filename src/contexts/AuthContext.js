import React, { useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = React.createContext();

//Custom hook to use in components to access authentication stuff
export function useAuth() {
    return useContext(AuthContext)
};

export function AuthProvider({ children }) {
    return (
        <AuthContext.Provider>
            { children }
        </AuthContext.Provider>
    )
};