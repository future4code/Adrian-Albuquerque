import { useState, useEffect } from 'react';

const useInputData = (initialState) => {
    const [data, setData] = useState(initialState);
    useEffect(() => {
    }, [data])

    const onChange = (event) => {
        const { name, value } = event.target
        setData({ ...data, [name]: value })
    }

    const Clear = () => {
        setData(initialState)
    }
    return { data, onChange, Clear }
}
export default useInputData;