import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Main = () => {
  const typingRef = useRef(null);
  const textToType = "Software Engineer"; // Text to be typed out

  useEffect(() => {
    const tl = gsap.timeline();
    const chars = textToType.split("");
    const typingSpeed = 0.1; // Set a fixed speed for typing

    // Clear previous content
    typingRef.current.innerHTML = ""; // Clear the previous characters

    // Create a span for each character and set opacity to 0 initially
    chars.forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.opacity = 0; // Set opacity to 0 for animation effect
      typingRef.current.appendChild(span);

      // Animate the opacity of each character with the same delay
      tl.to(span, {
        opacity: 1,
        duration: typingSpeed,
        ease: "power2.out",
      });
    });

    tl.play(); // Start the timeline

    // Cleanup function to stop animations on unmount
    return () => {
      tl.kill();
    };
  }, [textToType]);

  return (
    <div id="#main" className="flex relative h-[calc(100vh-64px)]">
      {/* Child 1 */}
      <div className="child1 w-1/2 bg-[#eceffe]"></div>

      {/* Child 2 */}
      <div className="child2 w-1/2 bg-white"></div>

      {/* Child 3 */}
      <div className="child3 absolute top-0 left-0 w-full h-full leading-0 flex flex-col items-center justify-center text-center bg-transparent">
        <h1 className="text-[20px] tracking-[0.1em] font-bold leading-[60px] text-[#3E64FF] cursor-default">
          HEY! I AM
        </h1>
        <h1 className="text-5xl font-extrabold tracking-[0.3em] cursor-default ">
          SYED USAMA
        </h1>
        <h1 className="text-2xl leading-[60px] cursor-default">
          I'm a{" "}
          <span
            className="ml-2 font-semibold tracking-[0.1em] text-[#3E64FF]"
            ref={typingRef}
          ></span>
        </h1>
      </div>
    </div>
  );
};

export default Main;
