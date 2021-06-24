import React, { useState } from 'react';
import GlobalContext from '../context/GlobalContext';
import { buttonColors } from './ThemeProvider';
import { ThemeProvider } from '@material-ui/core';

function ContextProvider({ children }) {
    const [post, setPost] = useState("Hello World");
    const Data = { post, setPost }

    return (
        <GlobalContext.Provider value={Data}>
            <ThemeProvider theme={buttonColors}>
                {children}
            </ThemeProvider>
        </GlobalContext.Provider>
    )
}
export default ContextProvider;