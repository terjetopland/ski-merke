import React, { useState, useEffect } from 'react';
import RequirementBadge  from "./RequirementBadge/RequirementBadge.js";
import "./Requirements.css";
import {CardContainer, CardImage, CardItem} from "./Card/Card";
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
        <>
            <CardContainer>
                <CardItem>
                    <h2>Krav og info</h2>
                    <p className="krav-og-info-text">NSFs Norsk Skimerke ble stiftet i 1938 til fremme av skiidretten. Merket finnes i bronse,
                        sølv, emalje og gull. Alle merkene har samme krav. Kravene er aldersbestemte og innfris i
                        langrennsløypa eller i slalåmbakken.</p>
                </CardItem>
            </CardContainer>
                <CardContainer>
                <CardItem>
                    <h2>Merkeprøver</h2>
                    <p className="krav-og-info-text">Merkeprøver kan arrangeres av alle lag tilsluttet NSF, av bedriftsidrettslag, militære, 
                        skoler, speidere, skiskoler, etc. Merkeprøvene kan med fordel legges inn på Skisportens Dag, skolens skidag, klubbmesterskap, 
                        ordinere renn, hotellrenn, etc. PS! Avlagt prøve for Norsk Skimerke godkjennes som utholdenhetsprøve for Norges Idrettsforbunds Idrettsmerke.</p>
                </CardItem>
                    <CardItem>
                        <h2>Merkekrav</h2>
                        <p className="krav-og-info-text">Deltagerne må innfri kravene til bronse og innløse merket før sølv kan tas, osv. Det kan kun tas ett merke pr. år. 
                            Etter innfridd og innløst gullmerke, kan en avlegge årlige prøver for NSF’s 5-års pokal, plaketter og Skistatuetten. Det er viktig å merke seg at 
                            du kan registrere kun ett merke pr. sesong. Etter at kravene til pokalen er innfridd, teller hver prøve dobbelt for alle over 60 år.</p>
                    </CardItem>
            </CardContainer>
            <CardContainer>
                <CardItem>
                    <h2 className="req_title">Merkekrav for langrenn (klasser følger kalenderår)</h2>
                    <div>
                        {requirements.map(requirement => (
                            <RequirementBadge gender={requirement.gender}>{requirement.lower_age} til {requirement.upper_age} år - {requirement.distance} km på {requirement.minutes} minutter</RequirementBadge>))}
        </div>
                </CardItem>
            </CardContainer>
        </>
    );
}



//export default Requirements;
