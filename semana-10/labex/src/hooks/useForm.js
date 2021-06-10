import { useState } from "react";

function useForm(initialValue) {
    const [formData, setFormData] = useState(initialValue);

    const handleForm = (event) => {
        setFormData(event.target.value)
    }
    return [formData, handleForm]
}
export default useForm;