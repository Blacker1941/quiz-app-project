import React, { useState } from "react";
import "./Form.css";

export default function Form() {
    const [firstNameData, setFirstNameData] = useState('');
    const [lastNameData, setLastNameData] = useState('');
    const [emailData, setEmailData] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [allValid, setAllValid] = useState(false);

    const submitHandler = (event) => {
        event.preventDefault();
        setSubmitted(true);

        if (firstNameData.length !== 0 && lastNameData.length !== 0 && emailData.length !== 0) {
            setAllValid(true);

            setTimeout(() => {
                setAllValid(false);
            }, 3000);
        }
    };

    return (
        <div className="form-container">
            <form className="register-form" onSubmit={submitHandler} autoComplete="off">

                {submitted && allValid && (
                    <div className="success-message">Success! Thank you for registering</div>
                )}

                <input
                    id="first-name"
                    onChange={(e) => setFirstNameData(e.target.value)}
                    value={firstNameData}
                    className="form-field"
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                />
                {submitted && firstNameData.length === 0 && (
                    <span id="first-name-error">Please enter a first name</span>
                )}

                <input
                    id="last-name"
                    onChange={(e) => setLastNameData(e.target.value)}
                    value={lastNameData}
                    className="form-field"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                />
                {submitted && lastNameData.length === 0 && (
                    <span id="last-name-error">Please enter a last name</span>
                )}

                <input
                    id="email"
                    onChange={(e) => setEmailData(e.target.value)}
                    value={emailData}
                    className="form-field"
                    type="text"
                    placeholder="Email"
                    name="email"
                />
                {submitted && emailData.length === 0 && (
                    <span id="email-error">Please enter an email address</span>
                )}

                <button className="form-field" type="submit">
                    Register
                </button>
            </form>
        </div>
    );
}
