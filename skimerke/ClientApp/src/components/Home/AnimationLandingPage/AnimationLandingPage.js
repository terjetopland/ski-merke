import lottie from "lottie-web";
import React, {useRef, useEffect} from 'react';
import "./AnimationLandingPage.css"

// how to make animation from Figma to Lottifiles: https://www.youtube.com/watch?v=x6_SyA-Hqi8 
// How to add animation: https://javascript.plainenglish.io/7-steps-to-animate-your-react-apps-using-lottie-202df77b73fc

export function AnimationLandingPage() {
    const container = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            animationData: require("./AnimationLandingPage.json"),
            autoplay: false,
            container: container.current,
            loop: true,
            renderer: "svg",
        })
    }, [])

    // Make sure that the animation is ready before playing it.
    setTimeout(() => {
        lottie.play()
    }, 1000)
    return (
        <div ref={container} id="animation-container" className="animation-landing-page"></div>
    )
}