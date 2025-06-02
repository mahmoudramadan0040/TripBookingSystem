"use client"
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import HeaderComponent from '@/components/Home/Header/HeaderComponent';
function LoginLayout({ children }) {
  return (
    <>
    <HeaderComponent></HeaderComponent>
      {children}
    </>
    );
}

export default LoginLayout;
