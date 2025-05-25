import HeaderBottomComponent from "./HeaderBottomComponent";
import HeaderSearchComponent from "./HeaderSearchComponent";
import HeaderTopComponent from "./HeaderTopComponent";
function HeaderComponent() {
  return (
    <>
      <header className="header-area-three">
        <div className="main-header">
          <HeaderTopComponent></HeaderTopComponent>
          <HeaderBottomComponent></HeaderBottomComponent>
        </div>
        <HeaderSearchComponent></HeaderSearchComponent>
      </header>
    </>
  );
}

export default HeaderComponent;
