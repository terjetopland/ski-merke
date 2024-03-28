import React, { Component } from 'react';
import {CardContainer, CardImage, CardItem} from "../Card/Card";
import silverPlakett from "../../images/silverPlakett.png"


export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <CardContainer>
                    <CardItem>
                        This is the left side of the card
                    </CardItem>
                    <CardItem>
                        <CardImage src={silverPlakett} alt="Sølvplakett" width="60%" />
                    </CardItem>
                </CardContainer>
                <h1>Skimerke</h1>
                <p>Din portal for effektive og enkle skitester</p>
            </div>
        );
    }
}
