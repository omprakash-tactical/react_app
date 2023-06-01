import React from "react";
import Header from "../Layout/Header";
import MyImage from "../images/bbbb.jpg";
import MyPdf from "../images/aaaaaa.pdf";
import { Document, Page } from "react-pdf";

function Home() {
  // const [numPages, setnumPages] = useState(null);
  return (
    <>
      <Header></Header>
      <div style={{ textAlign: "center" }}> </div>
      <div className="p-1 mb-1 bg-danger text-black">      
      <img
        src={MyImage}
        alt="Description of the image"
        style={{ width: "100%", height: "800px" }}
      />
      {/* <div>
        <iframe src={MyPdf} width="100%" height="10000"/>
      </div> */}
      </div>
    </>
  );
}

export default Home;
