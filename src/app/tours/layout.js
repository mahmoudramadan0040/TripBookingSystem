"use client";
import TourHeader from "@/components/Tours/TourHeader";
function TourLayout({ children }) {
  return (
    <>
      <TourHeader></TourHeader>
      {children}
    </>
  );
}

export default TourLayout;
