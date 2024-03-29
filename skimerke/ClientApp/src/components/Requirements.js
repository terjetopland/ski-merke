import React, {useState, useEffect} from 'react';
import RequirementBadge from "./RequirementBadge/RequirementBadge.js";
import {CardContainer, CardItem} from "./Card/Card";

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

    const male = requirements.filter(req => req.gender.toLowerCase() === "male");
    const female = requirements.filter(req => req.gender.toLowerCase() === "female");
    

    return (
        <CardContainer>
            <CardItem>
                {male.map((requirement) => (
                    <RequirementBadge key={requirement.id} gender={requirement.gender}>
                        {requirement.lowe_age} til {requirement.upper_age} år
                        - {requirement.distance} km på {requirement.minutes} min
                    </RequirementBadge>
                ))}
            </CardItem>
            <CardItem>
                {female.map((requirement) => (
                    <RequirementBadge key={requirement.id} qgender={requirement.gender}>
                        {requirement.lower_age} til {requirement.upper_age} år
                        - {requirement.distance} km på {requirement.minutes} min
                    </RequirementBadge>
                ))}
            </CardItem>
        </CardContainer>
    );
}


//export default Requirements;
