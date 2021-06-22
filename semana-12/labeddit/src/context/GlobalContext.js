import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export default function ContextProvider({ children }) {
    const [login, setLogin] = useState("");
    console.log(login)
    return (
        <GlobalContext.Provider value={{ login, setLogin }}>
            {children}
        </GlobalContext.Provider >
    )
}