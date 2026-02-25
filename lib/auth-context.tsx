import React, { createContext } from 'react';

type AuthContextType = {
    user:
}

const AuthContext = createContext(undefined)

export function AuthProvider({children}: {children: React.ReactNode}) {
    return <></>;

}

export function useAuth(){

}