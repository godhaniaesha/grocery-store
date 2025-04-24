import React, { useState } from 'react';

function CheckOut() {
    const [createAccount, setCreateAccount] = useState(false);
    const [shipToDifferent, setShipToDifferent] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [isCountryOpen, setIsCountryOpen] = useState(false);
    const [selectedState, setSelectedState] = useState("");
    const [isStateOpen, setIsStateOpen] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('direct_bank');

    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
        setIsCountryOpen(false);
    };

    const handleStateSelect = (state) => {
        setSelectedState(state);
        setIsStateOpen(false);
    };

    return (
        <>
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
                            <div className="x_custom_dropdown_container">
                                <input
                                    type="text"
                                    className="x_form_input"
                                    placeholder="Select Country"
                                    value={selectedCountry}
                                    onClick={() => setIsCountryOpen(!isCountryOpen)}
                                    readOnly
                                />
                                {isCountryOpen && (
                                    <div className="x_custom_dropdown_list">
                                        <div
                                            className="x_custom_dropdown_item"
                                            onClick={() => handleCountrySelect("United States (US)")}
                                        >
                                            United States (US)
                                        </div>
                                        <div
                                            className="x_custom_dropdown_item"
                                            onClick={() => handleCountrySelect("Canada")}
                                        >
                                            Canada
                                        </div>
                                        <div
                                            className="x_custom_dropdown_item"
                                            onClick={() => handleCountrySelect("United Kingdom")}
                                        >
                                            United Kingdom
                                        </div>
                                    </div>
                                )}
                            </div>
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
                                <div className="x_custom_dropdown_container">
                                    <input
                                        type="text"
                                        className="x_form_input"
                                        placeholder="Select State"
                                        value={selectedState}
                                        onClick={() => setIsStateOpen(!isStateOpen)}
                                        readOnly
                                    />
                                    {isStateOpen && (
                                        <div className="x_custom_dropdown_list">
                                            <div
                                                className="x_custom_dropdown_item"
                                                onClick={() => handleStateSelect("New York")}
                                            >
                                                New York
                                            </div>
                                            <div
                                                className="x_custom_dropdown_item"
                                                onClick={() => handleStateSelect("California")}
                                            >
                                                California
                                            </div>
                                            <div
                                                className="x_custom_dropdown_item"
                                                onClick={() => handleStateSelect("Texas")}
                                            >
                                                Texas
                                            </div>
                                        </div>
                                    )}
                                </div>
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
                        <div className="x_order_summary">
                            <h2 className="x_order_title">Your order</h2>
                            <div className="x_order_table">
                                <div className="x_order_header">
                                    <span>Product</span>
                                    <span>Subtotal</span>
                                </div>
                                <div className="x_order_item">
                                    <span>Carrots × 1</span>
                                    <span>$30.00</span>
                                </div>
                                <div className="x_order_item">
                                    <span>Egg × 1</span>
                                    <span>$44.00</span>
                                </div>
                                <div className="x_order_item">
                                    <span>Lemon × 1</span>
                                    <span>$19.00</span>
                                </div>
                                <div className="x_order_item">
                                    <span>Lettuce × 1</span>
                                    <span>$51.00</span>
                                </div>
                                <div className="x_order_subtotal">
                                    <span>Subtotal</span>
                                    <span>$144.00</span>
                                </div>
                                <div className="x_order_total">
                                    <span>Total</span>
                                    <span>$144.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="x_payment_section">
                    <div className="x_payment_method">
                        <label className="x_radio_label">
                            <input
                                type="radio"
                                checked={paymentMethod === 'direct_bank'}
                                onChange={() => setPaymentMethod('direct_bank')}
                                name="payment_method"
                            />
                            <span className="x_payment_title">Direct bank transfer</span>
                        </label>
                        {paymentMethod === 'direct_bank' && (
                            <p className="x_payment_description">
                                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                            </p>
                        )}
                    </div>

                    <div className="x_payment_method">
                        <label className="x_radio_label">
                            <input
                                type="radio"
                                checked={paymentMethod === 'cash'}
                                onChange={() => setPaymentMethod('cash')}
                                name="payment_method"
                            />
                            <span className="x_payment_title">Cash on delivery</span>
                        </label>
                        {paymentMethod === 'cash' && (
                            <p className="x_payment_description">
                               Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our{' '}
                               <a href="/privacy-policy" className="x_privacy_link">privacy policy</a>.  </p>
                        )}
                    </div>

                    <button type="submit" className="x_subscribe_button">
                    Place order
                                </button>
                </div>
                    </div>
                </div>
               
            </div>
        </>
    );
}

export default CheckOut;