import { useState } from 'react';

const useInputData = (initialState) => {
    const [data, setData] = useState(initialState);

    const onChange = (event) => {
        const { name, value } = event.target
        setData({ ...data, [name]: value })
    }

    const clear = () => {
        setData(initialState)
    }
    return { data, onChange, clear }
}
export default useInputData;