import React, {useState, useEffect} from 'react';
import RequirementBadge from "../RequirementBadge/RequirementBadge.js";
import "./Requirements.css";
import {CardContainer, CardItem, CardStack} from "../Card/Card";
import Footer from "../Footer/Footer";

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
    const male = requirements.filter(req => req.gender === "Male");
    
    console.log(male);
    
    const female = requirements.filter(req => req.gender === "Female");

    console.log(female);

    return (
        <>
            <section>
                <CardStack isDirectionVertical={false}>
                    <CardContainer>
                        <CardItem>
                            
                            <div className="fs-4 fw-bold font-f-lato pb-4 pt-4" >Krav og info</div>
                            <p className="krav-og-info-text font-f-lato">NSFs Norsk Skimerke ble stiftet i 1938 til fremme av
                                skiidretten. Merket finnes i bronse,
                                sølv, emalje og gull. Alle merkene har samme krav. Kravene er aldersbestemte og innfris
                                i
                                langrennsløypa eller i slalåmbakken.</p>
                        </CardItem>
                    </CardContainer>
                    <CardContainer>
                        <CardItem>
                            <div className="fs-4 fw-bold font-f-lato pb-4 pt-4">Merkeprøver</div>
                            <p className="krav-og-info-text">Merkeprøver kan arrangeres av alle lag tilsluttet NSF, av
                                bedriftsidrettslag, militære,
                                skoler, speidere, skiskoler, etc. Merkeprøvene kan med fordel legges inn på Skisportens
                                Dag,
                                skolens skidag, klubbmesterskap,
                                ordinere renn, hotellrenn, etc. PS! Avlagt prøve for Norsk Skimerke godkjennes som
                                utholdenhetsprøve for Norges Idrettsforbunds Idrettsmerke.</p>

                            <div className="fs-4 fw-bold font-f-lato pb-4 pt-4">Merkekrav</div>
                            <p className="krav-og-info-text">Deltagerne må innfri kravene til bronse og innløse merket
                                før
                                sølv kan tas, osv. Det kan kun tas ett merke pr. år.
                                Etter innfridd og innløst gullmerke, kan en avlegge årlige prøver for NSF’s 5-års pokal,
                                plaketter og Skistatuetten. Det er viktig å merke seg at
                                du kan registrere kun ett merke pr. sesong. Etter at kravene til pokalen er innfridd,
                                teller
                                hver prøve dobbelt for alle over 60 år.</p>
                        </CardItem>
                    </CardContainer>
                    </CardStack>
                    <CardStack>
                <CardContainer>
                    

                    <div style={{width: "100%"}}>
                    <h2 className="req_title text-center ">Merkekrav for langrenn (klasser følger kalenderår)</h2>
                    </div>
                    {/* MALE */}

                    <CardItem>
                        <div>
                            {male.map(requirement => (
                                requirement.lower_age < 11 ?
                                    <RequirementBadge
                                        gender={requirement.gender}>{requirement.upper_age} og yngre
                                        - {requirement.distance} km på {requirement.minutes} minutter</RequirementBadge>
                            
                              : requirement.upper_age < 75  ? <RequirementBadge
                                    gender={requirement.gender}>{requirement.lower_age} til {requirement.upper_age} år
                                    - {requirement.distance} km på {requirement.minutes} minutter</RequirementBadge>
                                
                                :  <RequirementBadge
                                            gender={requirement.gender}>{requirement.lower_age} og eldre
                                            - {requirement.distance} km på {requirement.minutes} minutter</RequirementBadge>
                                ))}
                        </div>
                    </CardItem>
            
                
                
                    {/* FEMALE */}
                    <CardItem className="">
                        <div>
                            {female.map(requirement => (
                                requirement.lower_age < 11 ?
                                    <RequirementBadge
                                        gender={requirement.gender}>{requirement.upper_age} og yngre
                                        - {requirement.distance} km på {requirement.minutes} minutter</RequirementBadge>

                                    : requirement.upper_age < 75 ? <RequirementBadge
                                            gender={requirement.gender}>{requirement.lower_age} til {requirement.upper_age} år
                                            - {requirement.distance} km på {requirement.minutes} minutter</RequirementBadge>

                                        : <RequirementBadge
                                            gender={requirement.gender}>{requirement.lower_age} og eldre
                                            - {requirement.distance} km på {requirement.minutes} minutter</RequirementBadge>

                            ))}

                        </div>
                    </CardItem>
                </CardContainer>
                    </CardStack>
                <Footer/>
            </section>
        </>
    );
}


//export default Requirements;
