import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faYoutube, faGithub, faSquareXTwitter} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

export default function Footer() {
    return (
        <footer>
            <div className="footer_container">
                <div className="left_side">
                    <div className="title">
                        <h1>Skimerke</h1>
                    </div>
                    <div className="left_text">
                        <p>Hjem</p>
                        <p>Min profil</p>
                        <p>Krav og info</p>
                        <p>Hjelp</p>
                    </div>
                </div>
                <div className="navbar_icons">
                    <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: "#ffffff" }} className="bounce" />
                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: "#ffffff" }} className="bounce"/>
                    <FontAwesomeIcon icon={faYoutube} size="2x" style={{ color: "#ffffff" }} className="bounce"/>
                    <FontAwesomeIcon icon={faSquareXTwitter} size="2x" style={{ color: "#ffffff" }} className="bounce"/>
                    <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: "#ffffff" }} className="bounce"/>
                </div>
                <div className="right_side">
                    <div className="right_text">
                        <p>Vårt fokus på bærekraft</p>
                        <p>Vilkår og betingelser</p>
                        <p>Personvernopplysninger</p>
                        <p>Bruk av informasjonskapsler</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
