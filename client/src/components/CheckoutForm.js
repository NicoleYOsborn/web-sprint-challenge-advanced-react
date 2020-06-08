import React, {useState} from "react";
import {useForm} from '../hooks/useForm'

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = (props) => {
  const [values, handleChanges]= useForm(initialValue);
  // const [showSuccessMessage, setShowSuccessMessage] = useForm();
  
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  // const [values, setValues] = useState(initialValue);

  // const handleChanges = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label htmlFor="firstName">
          First Name:
          <input
            id="firstName"
            name="firstName"
            type='text'
            // value={values.firstName}
            onChange={handleChanges}
          />
        </label>
        <label htmlFor="lastName">
          Last Name:
          <input
            id="lastName"
            name="lastName"
            type='text'
            // value={values.lastName}
            onChange={handleChanges}
          />
        </label>
        <label htmlFor="address">
          Address:
          <input
            id="address"
            name="address"
            type='text'
            // value={values.address}
            onChange={handleChanges}
          />
        </label>
        <label htmlFor='city'>
          City:
          <input id="city" type='text' name="city" 
          // value={values.city} 
          onChange={handleChanges} />
        </label>
        <label htmlFor="state">
          State:
          <input id="state" type='text'name="state" 
          // value={values.state} 
          onChange={handleChanges} />
        </label>
        <label htmlFor="zip">
          Zip:
          <input id="zip" type='text' name="zip" 
          // value={values.zip}
           onChange={handleChanges} />
        </label>
        <button data-testid="checkoutButton">Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {values.firstName} {values.lastName}
          </p>
          <p>{values.address}</p>
          <p>
            {values.city}, {values.state} {values.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
