import React from 'react';
import "./Card.css";

// CardContainer is the parent
// The CardContainer can hold as many CardItem as you want
// The CardImage can be used inside of a CardItem to set the size equal to the Card Item
const CardContainer = ({ children }) => {
    return (
        <div className="card-outer-container">
            <div className="card-inner-container">
                {children}
            </div>
        </div>
    );
}

const CardItem = ({ children }) => {
    return (
        <div className="card-item card-text">
            {children}
        </div>
    );
}

//Can define your own width to overwrite the width. Else the width will be 100% of its parent
const CardImage = ({ src, alt = "Insert alternative text", width }) => {
    const cardImageStyle = {
        width: width ? width : '100%'
    }
    return (
        <div className="card-image-container">
            <img className="card-img" src={src} alt={alt} style={cardImageStyle}/>
        </div>
    );
}

export {CardContainer, CardItem, CardImage};