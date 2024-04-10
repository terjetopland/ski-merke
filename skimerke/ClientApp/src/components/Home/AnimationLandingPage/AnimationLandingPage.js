import lottie from "lottie-web";
import React, {useRef, useEffect} from 'react';
import "./AnimationLandingPage.css"

// how to make animation from Figma to Lottifiles: https://www.youtube.com/watch?v=x6_SyA-Hqi8 
// How to add animation: https://javascript.plainenglish.io/7-steps-to-animate-your-react-apps-using-lottie-202df77b73fc
// docs: https://airbnb.io/lottie/#/web?id=html-player-installation

export const AnimationLandingPage = () => {
    const container = useRef(null);

    useEffect(() => {
        const animation = lottie.loadAnimation({
            animationData: require("./AnimationLandingPage.json"),
            autoplay: false,
            container: container.current,
            loop: true,
            renderer: "svg",
        });

        // Check if the animation is ready
        let isAnimationLoaded = false;
        animation.addEventListener('DOMLoaded', () => {
            isAnimationLoaded = true;
        });

        // Set a delay so that the animation starts after 1000 ms
        setTimeout(() => {
            if (isAnimationLoaded) {
                animation.play();
            }
        }, 1000);

        return () => {
            animation.destroy();
        };
    }, []);
    
    return (
        <div ref={container} id="animation-container" className="animation-landing-page"></div>
    )
}