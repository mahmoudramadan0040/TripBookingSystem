"use client"
import { Children, Fragment ,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

import Script from 'next/script';
function HomeLayout({ children }) {
  return (
    <>
      {children}
    </>
    );
}

export default HomeLayout;
