"use client";
import DetailsWithSlider from "@/components/details-with-slider/details-with-slider";
import { useEffect } from "react";
export default function TourDetails() {
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
    <div>
      <DetailsWithSlider  />
    </div>
  );
}
