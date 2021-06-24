import React, { useState } from 'react';
import GlobalContext from '../context/GlobalContext';
import { buttonColors } from './ThemeProvider';
import { ThemeProvider } from '@material-ui/core';

function ContextProvider({ children }) {
    const [commentCounter, setCommentCounter] = useState(0)

    return (
        <GlobalContext.Provider value={[commentCounter, setCommentCounter]}>
            <ThemeProvider theme={buttonColors}>
                {children}
            </ThemeProvider>
        </GlobalContext.Provider>
    )
}
export default ContextProvider;