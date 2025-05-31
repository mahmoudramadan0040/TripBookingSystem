"use client";
import { Fragment } from "react";
import HeaderComponent from "@/components/Home/Header/HeaderComponent";
import BannerContentComponent from "@/components/Home/Content/BannerContentComponent";
import SearchTransportComponent from "@/components/Home/Content/SearchTransportComponent";
import PopularPakageComponent from "@/components/Home/Content/PopularPakageComponent";
import { useGetToursQuery } from "../Redux/slices/TourSlice";
import { useDispatch } from "react-redux";
import { setTours } from "../Redux/slices/SharedSlice";
import { useEffect } from "react";
import FooterContentComponent from "@/components/Home/Content/FooterContentComponent";
function HomePage() {
  const { data: tours, isSuccess } = useGetToursQuery();
  const dispatch = useDispatch();
  useEffect(() => {
    if (isSuccess) {
      dispatch(setTours(tours));
    }
  }, [tours, dispatch, isSuccess]);
  return (
    <Fragment>
      <HeaderComponent></HeaderComponent>
      <BannerContentComponent></BannerContentComponent>
      <SearchTransportComponent></SearchTransportComponent>
      <PopularPakageComponent></PopularPakageComponent>
      <FooterContentComponent></FooterContentComponent>
    </Fragment>
  );
}

export default HomePage;
