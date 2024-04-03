import React from "react";
import "./Footer.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faYoutube, faXTwitter, faGithub} from "@fortawesome/free-brands-svg-icons";
export default function Footer () {
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
                    <FontAwesomeIcon icon={faFacebook} size="2xl" style={{color: "#ffffff",}}/>
                    <FontAwesomeIcon icon={faInstagram} size="2xl" style={{color: "#ffffff",}}/>
                    <FontAwesomeIcon icon={faYoutube} size="2xl" style={{color: "#ffffff",}}/>
                    <FontAwesomeIcon icon={faXTwitter} size="2xl" style={{color: "#ffffff",}}/>
                    <FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#ffffff",}}/>
                </div>
                <div className="right_side">
                    <div className="right_text">
                        <p>Vårt fokus på bærekraft</p>
                        <p>Vilkår og betingelser</p>
                        <p>Personvernopplysninger</p>
                        <p>Bruk av innformasjonskapsler</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}




