import { categories } from "../Data/data.js";
import "../pages/landing_page_CSS.css";
import "../pages/media_query_CSS.css";
import Footer from "./Footer.js";
import AutoType from "./AutoType.js";
import { HiOutlineNumberedList } from "react-icons/hi2";
import { MdDownloadDone } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Services_contener from "./landing_page_component/Services_contener.js";
import Sidebar from "../Components/Sidebar.js";
import Logo_Component from "../Components/Heading_components/Logo_component.js";
import SignatureComponent from "../Components/Heading_components/SignatureLine_component.js"
import HeadingLine from "../Components/Heading_components/HadingLine.js";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="background-patter sig-bag-color">
      {/* <Navbar /> */}

      <div className="container-fluid   pb-2">
        <Logo_Component/>
        <SignatureComponent text="Celebrating You, the Traditional Way!!"/>
        <Sidebar />
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
                <span className="d-flex justify-content-center ">
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
                    <div className="d-flex sig-text-color">25+</div>
                    <div className="sig-text-color">Services</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* {console.log("value is ", weddingService[0])} */}

        <div className="first-service-container " width="200px">
          <div>
            {categories.map((cat) => (
              <Services_contener 
                heading={cat.title_words}
                images ={cat.images}
              />
            ))}
          </div>
        </div>

        {/* <div  className="container-fluid  position-absolute  rounded-head  rounded-bottom-5 border border-danger"></div> */}
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;