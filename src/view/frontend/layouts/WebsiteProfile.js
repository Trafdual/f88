import React from "react";
import { Outlet } from "react-router-dom";
import Silbar from "../pages/Profile/Silbar";
import Banner from "../components/Banner";
import NewsNotification from "../components/NewsNotification";
import Header from "../partials/Header";
import Footer from "../partials/Footer";

const WebsiteProfile = () => {
  return (
    <div className="box-profile">
      <Header></Header>
      <Banner />
      <NewsNotification />
      <div className="box-member-profile">
        <div className="ctnr">
          <div className="row">
            <div className="">
              <Silbar />
            </div>
            <div className="silbar-right-step">
              <Outlet /> 
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default WebsiteProfile;
