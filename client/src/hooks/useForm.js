import {useEffect, useState} from 'react';

export function useForm(initialValues, submitCallback) {
    
    const[values, setValues] = useState(initialValues);

    useEffect(() => {
        setValues(initialValues)
    }, [initialValues])

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    };

    const submitHandler = async (e) => {
        try {
            e.preventDefault();
        
            await submitCallback(values);
            setValues(initialValues);
        }
        catch (error) {
            throw new Error(error.message);
        }
    };

    return {
        values,
        changeHandler,
        submitHandler
    };
}