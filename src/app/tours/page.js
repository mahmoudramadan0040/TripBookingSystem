"use client"
import TourList from "@/components/Tours/ToursList";
import { useGetToursQuery } from "../Redux/slices/TourSlice";
function Tours() {

    const {data}= useGetToursQuery();
    console.log(data);
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
