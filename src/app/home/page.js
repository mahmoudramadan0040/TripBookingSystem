import { Fragment } from "react";
import HeaderComponent from "@/components/HeaderComponent";
import HomeContentComponent from "@/components/HomeContentComponent";
function HomePage() {
    console.log('****rebuild****');
    
    return ( 
        <Fragment>
            <HeaderComponent />
            <HomeContentComponent />
        </Fragment>
     );
}

export default HomePage;