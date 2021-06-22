import React, { useState } from 'react';
import GlobalContext from '../context/GlobalContext';

function ContextProvider({ children }) {
    const [post, setPost] = useState("Hello World");
    const Data = { post, setPost }

    return (
        <GlobalContext.Provider value={Data}>
            {children}
        </GlobalContext.Provider >
    )
}
export default ContextProvider;