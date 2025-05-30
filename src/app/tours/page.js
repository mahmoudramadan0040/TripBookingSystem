"use client";
import TourList from "@/components/Tours/ToursList";
import { useSelector } from "react-redux";
import { useGetToursQuery } from "../Redux/slices/TourSlice";
function Tours() {
  const tours = useSelector((state) => state.shared.tours);

  console.log(tours);
  return (
    <>
      <main>
        {/* <TourFilters></TourFilters> */}

        <TourList tours={tours}></TourList>
      </main>
    </>
  );
}

export default Tours;
