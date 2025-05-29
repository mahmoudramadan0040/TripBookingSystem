import { Children, Fragment } from "react";
import Script from 'next/script';
function CartLayout({ children }) {
  return (
    <>
    
    {/* Load jQuery and Bootstrap */}
      <Script src="/assets/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/popper.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/bootstrap-5.3.0.min.js" strategy="beforeInteractive" />

    {/* Plugin and main.js */}
      <Script src="/assets/js/plugin.js" strategy="afterInteractive" />
      <Script src="/assets/js/main.js" strategy="afterInteractive" />
      
   
      {children}
    </>
    );
}

export default CartLayout;
