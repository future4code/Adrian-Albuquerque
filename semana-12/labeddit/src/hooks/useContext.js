import { useContext } from "react";
import { GlobalContext } from '../context/index';

export function useProvider() {
    const context = useContext(GlobalContext);
return context;
}