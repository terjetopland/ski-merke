import React, { useState } from "react";
import { apiAddPersonToAppUser } from "../api/ApiAddPersonToAppUser";

export const AddPersonForm = () => {
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        gender: "Other",
        dateOfBirth: new Date().toISOString()
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await apiAddPersonToAppUser(formValues);
            console.log("Person added successfully!");
        } catch (error) {
            console.error("Error adding person:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First name:</label>
                <input id="firstName" type="text" name="firstName" value={formValues.firstName} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="lastName">Last name:</label>
                <input id="lastName" type="text" name="lastName" value={formValues.lastName} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="gender">Gender:</label>
                <select id="gender" name="gender" value={formValues.gender} onChange={handleInputChange}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div>
                <label htmlFor="dateOfBirth">Date of Birth:</label>
                <input id="dateOfBirth" type="date" name="dateOfBirth" value={formValues.dateOfBirth} onChange={handleInputChange} />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};
