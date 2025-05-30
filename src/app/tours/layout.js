"use client";
import TourHeader from "@/components/Tours/TourHeader";
import { useEffect } from "react";

function TourLayout({ children }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/assets/js/main.js'; // place your script in public/
    script.async = true;
    document.body.appendChild(script);

  
    return () => {
    document.body.removeChild(script); // clean up on unmount

    };
  }, []);
  return (
    <>
      <TourHeader />
      {children}
    </>
  );
}

export default TourLayout;
