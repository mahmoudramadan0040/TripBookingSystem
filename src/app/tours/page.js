"use client";
import TourList from "@/components/Tours/ToursList";
import { useSelector } from "react-redux";
import { useGetToursQuery } from "../Redux/slices/TourSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
function Tours() {
  let tours = useSelector((state) => state.shared.tours);
  const dispatch = useDispatch();

  // Only fetch from API if `tours` is empty or undefined
  const { data, isLoading } = useGetToursQuery(undefined, {
    skip: tours && tours.length > 0,
  });

  // Save to Redux state when fetched
  useEffect(() => {
    if (data && data.count > 0 && (!tours || tours.length == 0)) {
      dispatch(setTours(data));
    }
  }, [data, tours, dispatch]);


  
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
