import { Fragment } from "react";
import HeaderComponent from "@/components/Home/Header/HeaderComponent";
import BannerContentComponent from "@/components/Home/Content/BannerContentComponent";
import SearchTransportComponent from "@/components/Home/Content/SearchTransportComponent";
import PopularPakageComponent from "@/components/Home/Content/PopularPakageComponent";
function HomePage() {
    return ( 
        <Fragment>
            <HeaderComponent></HeaderComponent>
            <BannerContentComponent></BannerContentComponent>
            <SearchTransportComponent></SearchTransportComponent>
            <PopularPakageComponent></PopularPakageComponent>
        </Fragment>
     );
}

export default HomePage;