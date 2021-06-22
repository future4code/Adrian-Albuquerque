import React, { useEffect, useState } from 'react';
import GlobalContext from '../context/GlobalContext';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

function ContextProvider({ children }) {
    const [login, setLogin] = useState("");
    const Data = { login, setLogin }
    const buttonTheme = createMuiTheme({
        keys: 1
    })
    return (
        <GlobalContext.Provider value={Data}>
            {children}
        </GlobalContext.Provider >
    )
}
export default ContextProvider;