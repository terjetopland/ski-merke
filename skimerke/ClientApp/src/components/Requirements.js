import React, { useState, useEffect } from 'react';

function Requirements() {
    const [requirements, setRequirements] = useState([]);

    useEffect(() => {
        fetchRequirements(); // Fetch data when component mounts
    }, []);

    async function fetchRequirements() {
        try {
            const response = await fetch('/Requirement'); // Adjust the endpoint if needed
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
                        <p>Time Requirements: {requirement.time}</p>
                        <p>Gender: {requirement.gender}</p>
                        <p>Distance: {requirement.distance} km</p>
                        <p>Age: {requirement.age}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}



export default Requirements;
