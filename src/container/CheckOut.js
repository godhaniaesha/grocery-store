import React, { useState } from 'react';

function CheckOut() {
    const [createAccount, setCreateAccount] = useState(false);
    const [shipToDifferent, setShipToDifferent] = useState(false);

    return (
        <div className="x_checkout_section a_header_container">
            <div className="x_checkout_content">
                <div className="x_billing_section">
                    <h2 className="x_billing_title">Billing details</h2>
                    <div className="x_billing_form">
                        <div className="x_form_row">
                            <input 
                                type="text" 
                                placeholder="First Name" 
                                className="x_form_input"
                            />
                            <input 
                                type="text" 
                                placeholder="Last Name" 
                                className="x_form_input"
                            />
                        </div>
                        <input 
                            type="text" 
                            placeholder="Company name (optional)" 
                            className="x_form_input"
                        />
                        <select className="x_form_input x_form_select"
                        >
                            <option>United States (US)</option>
                            <option>Canada</option>
                            <option>United Kingdom</option>
                        </select>
                        <input 
                            type="text" 
                            placeholder="House number and street name" 
                            className="x_form_input"
                        />
                        <input 
                            type="text" 
                            placeholder="Apartment, suite, unit, etc. (optional)" 
                            className="x_form_input"
                        />
                        <div className="x_form_row">
                            <input 
                                type="text" 
                                placeholder="Town / City" 
                                className="x_form_input"
                            />
                            <select 
                                className="x_form_input x_form_select" 
                            >
                                <option value="" disabled selected>Select State</option>
                                <option value="NY">New York</option>
                                <option value="CA">California</option>
                                <option value="TX">Texas</option>
                            </select>
                        </div>
                        <div className="x_form_row">
                            <input 
                                type="text" 
                                placeholder="ZIP Code" 
                                className="x_form_input"
                            />
                            <input 
                                type="tel" 
                                placeholder="Phone" 
                                className="x_form_input"
                            />
                        </div>
                        <input 
                            type="email" 
                            placeholder="Email" 
                            className="x_form_input"
                        />
                        <div className="x_checkbox_wrapper">
                            <label className="x_checkbox_label">
                                <input 
                                    type="checkbox"
                                    checked={createAccount}
                                    onChange={() => setCreateAccount(!createAccount)}
                                />
                                <span>Create an account?</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="x_shipping_section">
                    <div className="x_checkbox_wrapper">
                        <label className="x_checkbox_label">
                            <input 
                                type="checkbox"
                                checked={shipToDifferent}
                                onChange={() => setShipToDifferent(!shipToDifferent)}
                            />
                            <span>Ship to a different address?</span>
                        </label>
                    </div>
                    <textarea 
                        placeholder="Notes about your order, e.g. special notes for delivery."
                        className="x_form_textarea"
                    ></textarea>
                </div>
            </div>
        </div>
    );
}

export default CheckOut;