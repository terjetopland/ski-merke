import React from 'react';
import "./RequirementBadge.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMars, faVenus } from "@fortawesome/free-solid-svg-icons";

export default function RequirementBadge({ children, gender }) {
    return (
        <div className="badge">
            <div className={gender === "Male" ? "msquare" : "fsquare"}>
                <div className="rectangle-5-6"></div>
                <FontAwesomeIcon icon={gender === "Male" ? faMars : faVenus} size="2xl" style={{ color: "#ffffff" }} />
            </div>
            <div className="text_badge" >{children}</div>
        </div>
    );
}
