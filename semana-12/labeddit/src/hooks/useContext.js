import { useContext } from "react";
import { GlobalContext } from '../context/index';

export function useProvider() {
    const context = useContext(GlobalContext);
    // const {login, setLogin} = context;
//  return {login, setLogin}   
return context
}