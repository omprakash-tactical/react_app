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
      <div style={{ textAlign: "center" }}>HOME</div>
      <img
        src={MyImage}
        alt="Description of the image"
        style={{ width: "1900px", height: "500px" }}
      />
      <div>
       

        <iframe src={MyPdf} width="100%" height="10000"/>
      </div>
    </>
  );
}

export default Home;
