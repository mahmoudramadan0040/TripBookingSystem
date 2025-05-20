import { Fragment } from "react";
import HeaderComponent from "@/components/HeaderComponent";
import HomeContentComponent from "@/components/HomeContentComponent";
function HomePage() {
    return ( 
        <Fragment>
            <HeaderComponent></HeaderComponent>
            <HomeContentComponent></HomeContentComponent>
        </Fragment>
     );
}

export default HomePage;