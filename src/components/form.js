import React, { useState } from 'react';

function RegistrationForm() {
    // State to store input values
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        referredBy: ''
    });

    // Handler for input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // You can process the formData here
        console.log('Form Data:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name:</label>
                <input 
                    type="text" 
                    name="firstName" 
                    value={formData.firstName} 
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label>Last Name:</label>
                <input 
                    type="text" 
                    name="lastName" 
                    value={formData.lastName} 
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label>Email:</label>
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label>Referred By (Code):</label>
                <input 
                    id="referralCodeField"
                    type="text" 
                    name="referredBy" 
                    value={formData.referredBy} 
                    onChange={handleChange} 
                />
            </div>
            <button type="submit">Register</button>
        </form>
    );
}

export default RegistrationForm;
