"use client";
import { Fragment } from "react";
import HeaderComponent from "@/components/Home/Header/HeaderComponent";
import BannerContentComponent from "@/components/Home/Content/BannerContentComponent";
import SearchTransportComponent from "@/components/Home/Content/SearchTransportComponent";
import PopularPakageComponent from "@/components/Home/Content/PopularPakageComponent";
import FooterContentComponent from "@/components/Home/Content/FooterContentComponent";
import FavoritPakageComponent from "@/components/Home/Content/FavoritPakageComponent";
import { useGetToursQuery } from "../Redux/slices/TourSlice";
import { useDispatch } from "react-redux";
import { setTours } from "../Redux/slices/SharedSlice";
import { useEffect } from "react";
import AboutUsComponent from "@/components/Home/Content/AboutUsComponent";
function HomePage() {
  const { data: tours, isSuccess } = useGetToursQuery();
  console.log(tours);
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
      <FavoritPakageComponent></FavoritPakageComponent>
      <AboutUsComponent></AboutUsComponent>
      {/* <FooterContentComponent></FooterContentComponent> */}
    </Fragment>
  );
}

export default HomePage;
