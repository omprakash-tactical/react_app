import React from "react";
import Header from "../Layout/Header";
import MyImage from "../images/bbbb.jpg";
import MyPdf from "../images/aaaaaa.pdf";
import { Document, Page } from "react-pdf";

function Home() {
  return (
    <>
      <div className="container main_header">
        <div className="row text-center text-info m-3 p-1">
          <div className="col-md-4">
            <img
              src="https://static.wixstatic.com/media/56488f_372a3661c3d8429e91a1a53f9c203060~mv2.png/v1/fill/w_228,h_123,al_c,lg_1,q_85,enc_auto/Capture_edited.png"
              alt=""
            />
          </div>
          <div className="col-md-8">
            <p className="school_logo">EAST & WEST HIGH SCHOOL</p>
            <p className="school_affilation">
              Run By East & West Educational Society Affiliated to C.B.S.E New
              Delhi
            </p>
          </div>
        </div>
      </div>
      <Header></Header>
      <div style={{ textAlign: "center" }}> </div>
      <div className="p-1 mb-1 bg-danger text-black">
        <img
          src={MyImage}
          alt="Description of the image"
          style={{ width: "100%", height: "800px" }}
        />        
      </div>
    </>
  );
}

export default Home;
