import React, {Component} from 'react';
import {CardStack, CardContainer, CardImage, CardItem} from "../Card/Card";
import silverPlakett from "../../images/silverPlakett.png"
import landingPage from "../../images/landingPage.png"
import upcomingSkiRace from "../../images/kommende_skirenn.png"
import "../../custom.css"
import "./Home.css"
import {AnimationLandingPage} from "../AnimationLandingPage/AnimationLandingPage";


export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div className="landing-page-background">
                <div className="top-container">
                    <div className="top">
                        <img src={landingPage} alt="Cross country skiing - mountains"/>
                        <div className="centered font-f-lato">
                            <div className="display-4 fw-normal small-size-header-1">Skimerke</div>
                            <div className="fs-6 fw-light small-size-header-2">
                                Din portal for effektive og enkle skitester
                            </div>
                            <AnimationLandingPage/>
                        </div>
                    </div>
                </div>
                <CardStack>
                    <CardContainer>
                        <CardItem>
                            <div className="text-container">
                                <div className="fs-2 fw-light font-f-lato">Hva er norsk skimerke?</div>
                                <div className="fs-6 fw-light font-f-lato">
                                    NSFs Norsk Skimerke ble stiftet i 1938 til fremme av skiidretten.
                                    Merket finnes i bronse, sølv, emalje og gull. Alle merkene har samme krav.
                                    Kravene er aldersbestemte og innfris i langrennsløypa eller i slalåmbakken.
                                </div>
                                <div className="fs-6 fw-light font-f-lato">
                                    Deltagerne må innfri kravene til bronse og innløse merket før sølv kan tas, osv. Det
                                    kan
                                    kun tas ett merke pr. år. Etter innfridd og innløst gullmerke, kan en avlegge årlige
                                    prøver for NSF’s 5-års pokal, plaketter og Skistatuetten. Det er viktig å merke seg
                                    at
                                    du kan registrere kun ett merke pr. sesong. Etter at kravene til pokalen er
                                    innfridd,
                                    teller hver prøve dobbelt for alle over 60 år.
                                </div>
                                <div className="fs-6 fw-light font-f-lato">
                                    Merkeprøver kan arrangeres av alle lag tilsluttet NSF, av bedriftsidrettslag,
                                    militære,
                                    skoler, speidere, skiskoler, etc. Merkeprøvene kan med fordel legges inn på
                                    Skisportens
                                    Dag, skolens skidag, klubbmesterskap, ordinere renn, hotellrenn, etc. PS! Avlagt
                                    prøve
                                    for Norsk Skimerke godkjennes som utholdenhetsprøve for Norges Idrettsforbunds
                                    Idrettsmerke.
                                </div>
                            </div>
                        </CardItem>
                        <CardItem>
                            <CardImage src={silverPlakett} alt="Sølvplakett"/>
                        </CardItem>
                    </CardContainer>
                    <CardContainer>
                        <CardItem>
                            <CardImage  src={upcomingSkiRace} alt="Table of upcoming ski races"/>
                        </CardItem>
                        <CardItem>
                            <div className="text-container">
                                <div className="fs-2 fw-light font-f-lato">Meld deg på skirenn</div>
                                <div className="fs-6 fw-light font-f-lato">
                                    Klar for eventyret? Meld deg på skirenn og bli en del av spenningen! Med vår enkle
                                    påmeldingsprosess er du bare noen få klikk unna å ta del i actionen. Velkommen til
                                    en verden av skiglede og utfordringer – bli med oss i dag og utforsk skirenn!
                                </div>
                            </div>
                        </CardItem>
                    </CardContainer>
                </CardStack>
            </div>
        );
    }
}
