import React, { useState, useEffect } from 'react';

function Requirements() {
    const [requirements, setRequirements] = useState([]);

    useEffect(() => {
        fetchRequirements(); // Fetch data when component mounts
    }, []);

    async function fetchRequirements() {
        try {
            const response = await fetch('/requirement'); // Adjust the endpoint if needed
            const data = await response.json();
            setRequirements(data); // Update state with fetched data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <div>
            <h2>Requirement List</h2>
            <ul>
                {requirements.map(requirement => (
                    <li key={requirement.id}>
                        <p>Time Requirements: {requirement.minutes}</p>
                        <p>Gender: {requirement.gender}</p>
                        <p>Distance: {requirement.distance} km</p>
                        <p>Age: {requirement.lower_age}</p>
                        <p>Age: {requirement.upper_age}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}



export default Requirements;
