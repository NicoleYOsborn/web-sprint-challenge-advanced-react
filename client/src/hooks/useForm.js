// write your custom hook here to control your checkout form
import {useState} from 'react';

export const useForm = initialValue => {
   
    // const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [values, setValues] = useState(initialValue);
   
    const handleChanges = e => {
        console.log('event handler handling')
        setValues({ ...values, [e.target.name]: e.target.value });
        console.log("event handled")
      };

    return [values, handleChanges];
  };
  