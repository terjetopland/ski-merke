import React, { useState, useEffect } from 'react';
import RequirementBadge  from "./RequirementBadge/RequirementBadge.js";

export default function Requirements() {
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
            <ul>
                {requirements.map(requirement => (
                        <RequirementBadge gender={requirement.gender}>{requirement.lower_age} til {requirement.upper_age} år - {requirement.distance} km på {requirement.minutes} min</RequirementBadge>
                ))}
            </ul>
        </div>
    );
}



//export default Requirements;
