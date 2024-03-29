import React, {Component} from 'react';
import {CardContainer, CardImage, CardItem} from "../Card/Card";
import silverPlakett from "../../images/silverPlakett.png"
import landingPage from "../../images/landingPage.png"
import "../../custom.css"
import "./Home.css"


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
                            <div className="fs-6 fw-light small-size-header-2">Din portal for effektive og enkle skitester
                            </div>
                        </div>
                    </div>
                </div>
                <CardContainer>
                    <CardItem>
                        <div className="fs-2 fw-light font-f-lato">Hva er norsk skimerke?</div>
                        <div className="fs-6 fw-light font-f-lato">
                            NSFs Norsk Skimerke ble stiftet i 1938 til fremme av skiidretten.
                             Merket finnes i bronse, sølv, emalje og gull. Alle merkene har samme krav.
                             Kravene er aldersbestemte og innfris i langrennsløypa eller i slalåmbakken.
                        </div>
                    </CardItem>
                    <CardItem>
                        <CardImage src={silverPlakett} alt="Sølvplakett" />
                    </CardItem>
                </CardContainer>
            </div>
        );
    }
}
