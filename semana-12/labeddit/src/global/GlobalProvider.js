import React, { useEffect, useState } from 'react';
import GlobalContext from '../context/GlobalContext';

function ContextProvider({ children }) {
    const [login, setLogin] = useState("");


    useEffect(() => {

    }, [])

    const Data = { login, setLogin }

    return (
        <GlobalContext.Provider value={Data}>
            {children}
        </GlobalContext.Provider >
    )
}
export default ContextProvider;