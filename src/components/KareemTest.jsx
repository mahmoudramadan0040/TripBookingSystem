"use client";

import { useEffect, useState } from "react";

export default function KareemTest() {
  const [tourPackage, setTourPackage] = useState({});

  useEffect(() => {
    console.log("-------Kareem Test-------");
    fetch("/assets/fullDayTours.json")
      .then((res) => res.json())
      .then((data) => {
        setTourPackage(data);
        console.log("Fetched data:", data);
      })
      .catch((error) => {
        console.error("Failed to load JSON:", error);
      });
  }, []);

  return (
    <div>
      <h1>Kareem Test</h1>
      {tourPackage ? (
        <pre>{JSON.stringify(tourPackage, null, 2)}</pre>
      ) : (
        <p>Loading tour data...</p>
      )}
    </div>
  );
}
