import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {

    render(<CheckoutForm />);
    const header = screen.getByText(/checkout form/i);
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {

    render(<CheckoutForm/>);

    const fnameInput = screen.getByLabelText(/first name/i);
    const lnameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);

    fireEvent.change(fnameInput, {target: {value: 'Nicole'}})
    fireEvent.change(lnameInput, {target: {value: 'Osborn'}})
    fireEvent.change(addressInput, {target: {value: '121 Palm Ln'}})
    fireEvent.change(cityInput, {target: {value: 'Sunnyvale'}})
    fireEvent.change(stateInput, {target: {value: 'CA'}})
    fireEvent.change(zipInput, {target: {value: '12345'}})

    const submitButton = screen.getByTestId("checkoutButton");
    fireEvent.click(submitButton);

    const confirmMessage = screen.getByText(/sunnyvale/i);
    expect(confirmMessage).toBeInTheDocument()

});


// firstName: "",
//   lastName: "",
//   address: "",
//   city: "",
//   state: "",
//   zip: 