import lottie from "lottie-web";
import React, {useRef, useEffect} from 'react';
import "./LoadingAnimation.css"

// how to make animation from Figma to Lottifiles: https://www.youtube.com/watch?v=x6_SyA-Hqi8 
// How to add animation: https://javascript.plainenglish.io/7-steps-to-animate-your-react-apps-using-lottie-202df77b73fc

export function LoadingAnimation() {
    const container = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            animationData: require("./LoadingAnimation.json"),
            autoplay: true,
            container: container.current,
            loop: true,
            renderer: "svg",
        })
    }, [])

    return (
        <div ref={container} id="animation-container" className="animation-loading"></div>
    )
}