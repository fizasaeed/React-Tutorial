import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

//Outlet sticks the header and footer component and just make changes in the middle part like add home , about and other pages components, basically it is making a nesting of the different components in main.jsx
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
