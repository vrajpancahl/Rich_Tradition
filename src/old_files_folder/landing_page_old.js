

// import WebImageGallary from './web_image_gallary.js'

import "../pages/Navbar_CSS.css";
import { logo } from "../pages/image_import.js";
import "../pages/landing_page_CSS.css";
import "../pages/media_query_CSS.css";
import Footer from "../pages/Footer.js";
import AutoType from "../pages/AutoType.js";
import { HiOutlineNumberedList } from "react-icons/hi2";
import { MdDownloadDone } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Services_contener from "../pages/landing_page_component/Services_contener.js";
import Sidebar from "../Components/Sidebar.js";


function LandingPage() {
  const navigate = useNavigate();

  const weddingService = [
    {
      title: "Chori",
      imageName: "chori_img.jpg",
    },
    {
      title: "Mandap",
      imageName: "mandap_img.jpg",
    },
    {
      title: "Stage",
      imageName: "stage_img.jpg",
    },
    {
      title: "Catering",
      imageName: "catering_img.jpg",
    },
  ];

  const specialServiceForWedding = [
    {
      title: "Bridel Entry",
      imageName: "bridelEntry_img.jpg",
    },
    {
      title: "Car Decoretion",
      imageName: "carDecoretion_img.jpg",
    },
    {
      title: "Lagan Geet",
      imageName: "laganGeet_img.jpg",
    },
    {
      title: "Dholi",
      imageName: "dholi_img.jpg",
    },
    {
      title: "Dj",
      imageName: "Dj_img.jpg",
    },
    {
      title: "Haldi & Mhendi",
      imageName: "MahendiDecoretion_img.jpg",
    },
    {
      title: "Make-up",
      imageName: "makeUp_img.jpg",
    },
  ];

  const flowerDecoration = [
    {
      title: "Netural Flower Decoration",
      imageName: "ntr_flower.jpg",
    },
    {
      title: "Artificial Flower Decoration",
      imageName: "arti_flower.jpg",
    },
    {
      title: "Probs Decoration",
      imageName: "probs_decoration.jpg",
    },
  ];

  const festivalDecoration = [
    {
      title: "Ganpati Decoration",
      imageName: "ganpatiDecoration_img.jpg",
    },
  ];

  const generalDecoration = [
    {
      title: "Ballon Decoration",
      imageName: "ballonDecoration_img.jpg",
    },
    {
      title: "Light Decoration",
      imageName: "lighting_img.jpg",
    },
  ];



  return (
    <div className="background-patter sig-bag-color">
      {/* <Navbar /> */}

      <div
        className="container-fluid   pb-2"
        // style={{ height: "320px" }}
      >

        {/* Logo */}
        <div className="navbar p-0 ">
          <div className="container-fluid d-flex justify-content-center ">
            <a className="navbar-brand " onClick={()=> {navigate("/Rich_Tradition/")}}>
              <img
                src={logo}
                alt="Logo"
                width="200"
                height="100"
                className="d-inline-block align-text-top"
              />
            </a>
          </div>
        </div>

        {/* head line */}
        <div className="container-sm my-3 fs-1 ">
          <p className="txt-gold Font-DancingScript autoType_font_size">
            "Celebrating You, the Traditional Way!!"
          </p>
        </div>
        
        <Sidebar/>
        {/* <div className="container-fluid  position-absolute  rounded-head  rounded-top-5 border border-danger"  */}
         {/* style={{ bottom: "0%" }} */}
        {/* ></div> */}

      </div>

      {/* Autoplay, achivment */}
      <div className="bg-white rounded-5  py-5">
        <div className="container-fluid bg-white position-relative pt-2 rounded-top-5">
          {/* <div className="container-fluid rounded-head position-absolute  ">
            </div> */}
          <div className="container-sm d-flex justify-content-center">
            <div className=" d-flex flex-column text-light  Ad_image_info">
              <div className="h2">
                <span className="d-flex fs-2 sig-text-color  justify-content-center">
                  Expert in
                </span>
              </div>
              <div >
                <span className="d-flex justify-content-center">
                  <AutoType />
                </span>
              </div>
              <div className="d-flex flex-row flex-wrap justify-content-center">
                <div className="d-flex flex-row ">
                  <div className="d-flex align-items-center  ms-2  echivmentIcon sig-text-color">
                    <MdDownloadDone />
                  </div>
                  <div className="d-flex flex-column  ms-4 echivmentText">
                    <div className="d-flex  sig-text-color">100+</div>
                    <div className="sig-text-color">Events Experience</div>
                  </div>
                </div>
                <div className="d-flex flex-row ">
                  <div className="d-flex align-items-center  ms-2  echivmentIcon sig-text-color">
                    <HiOutlineNumberedList />
                  </div>
                  <div className="d-flex flex-column  echivmentText">
                    <div className="d-flex sig-text-color">20+</div>
                    <div className="sig-text-color">Services</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {console.log("value is ", weddingService[0])}

       <div className="first-service-container">
          <Services_contener
            category = {"Wedding Serivce"}
            heading={["Wedding", " Service"]}
            images={weddingService}
          />
          <Services_contener
            category = {"Special Service For Wedding"}
            heading={["Special", " Services"]}
            images={specialServiceForWedding}
          />
          <Services_contener
            category = {"Flower Decoration"}
            heading={["Flower", " Decoration"]}
            images={flowerDecoration}
          />
          <Services_contener
            category = {"Festival Decoration"}
            heading={["Festival", " Decoration"]}
            images={festivalDecoration}
          />
          <Services_contener
            category = {"General Decoration"}
            heading={["General", " Decoration"]}
            images={generalDecoration}
          />

        </div>

        {/* <div  className="container-fluid  position-absolute  rounded-head  rounded-bottom-5 border border-danger"></div> */}
      </div>                       
      <Footer />
    </div>
  );
}

export default LandingPage;