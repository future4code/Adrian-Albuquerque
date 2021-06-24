import { useHistory } from "react-router";
import { useEffect } from "react";

function useProtectedPage() {
    const history = useHistory();
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token === null) {
            history.push("/login")
        }
    }, [])
}
export default useProtectedPage;
