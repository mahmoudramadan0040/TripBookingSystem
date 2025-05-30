"use client";
import TourList from "@/components/Tours/ToursList";
import { useGetToursQuery } from "../Redux/slices/TourSlice";
import { useEffect } from "react";

function Tours() {
  const {
    data: toursData,
    isLoading,
    isError,
    isFetching,
  } = useGetToursQuery();

  console.log(toursData);


  return (
    <>
      <main>
        {/* <TourFilters></TourFilters> */}

        <TourList></TourList>
      </main>
    </>
  );
}

export default Tours;
