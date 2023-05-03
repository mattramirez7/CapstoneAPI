import '../style/DemoHeader.css';
import { useEffect, useRef } from 'react';

function DemoHeader() {
  const starRefs = useRef([]);

  useEffect(() => {
    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const animate = (star) => {
      star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
      star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

      star.style.animation = "none";
      const yo = star.offsetHeight;
      star.style.animation = "spin 1s linear infinite";
    };

    let index = 0;
    const interval = 1000;

    const animateStar = (star, timeoutId, intervalId) => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);

      timeoutId = setTimeout(() => {
        animate(star);
        intervalId = setInterval(() => animate(star), 1000);
      }, interval);

      return { timeoutId, intervalId };
    };

    starRefs.current = starRefs.current.slice(0, 3);
    let timeoutIds = [], intervalIds = [];
    starRefs.current.forEach((star, idx) => {
      let timeoutId = null, intervalId = null;
      ({ timeoutId, intervalId } = animateStar(star, timeoutId, intervalId));
      timeoutIds.push(timeoutId);
      intervalIds.push(intervalId);
    });

    return () => {
      timeoutIds.forEach((id) => clearTimeout(id));
      intervalIds.forEach((id) => clearInterval(id));
    };
  }, []);
    return (
        <div className="header">
            <h1>
            Lets work
            <span> </span>  
            <span className="magic"></span>
            <span className="magic">
                <span ref={(el) => (starRefs.current[0] = el)} className="magic-star">
                    <svg viewBox="0 0 512 512">
                        <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                    </svg>
                </span>
                <span ref={(el) => (starRefs.current[1] = el)} className="magic-star">
                    <svg viewBox="0 0 512 512">
                        <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                    </svg>
                </span>
                <span ref={(el) => (starRefs.current[2] = el)} className="magic-star">
                    <svg viewBox="0 0 512 512">
                        <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                    </svg>
                </span>
                <span className="magic-text"> some magic </span>
            </span>
            <span> and find your products</span>
        </h1>
    </div>
    )}

export default DemoHeader;



