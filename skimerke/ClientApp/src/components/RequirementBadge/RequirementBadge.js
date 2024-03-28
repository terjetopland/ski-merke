import React from 'react';
import "./RequirementBadge.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMars, faVenus} from "@fortawesome/free-solid-svg-icons";

export default function requirementBadge({children, gender}) {
    return (
        <div className="badge">
            <div className="group-9-7">
                {gender == "Male" ?
                    <div className="msquare">
                        <div className="rectangle-5-6"/>
                        <FontAwesomeIcon icon={faMars} size="2xl" style={{color: "#ffffff",}}/>
                    </div>

                    : <div className="fsquare">
                        <div className="rectangle-5-6"/>
                        <FontAwesomeIcon icon={faVenus} size="2xl" style={{color: "#ffffff",}}/>
                    </div>
                }
            </div>
            <div className="text">{children}</div>
            <div className="text">
                <p className="text-2"></p>
            </div>
        </div>
    );
}