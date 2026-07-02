import { useNavigate, useParams } from "react-router-dom";
import { useLayoutEffect } from "react";
import "../pages/web_image_gallary_CSS.css";
import "../pages/web_image_gallary_CSS_MediaQueary.css";
import { logo } from "./image_import.js";
import Sidebar from "../Components/Sidebar";
import Footer from "../pages/Footer";
import {
  design_ele_star,
  design_ele_line,
} from "./image_import.js";
import { event_images } from "../Data/data.js";
import Masonry from "react-masonry-css";
import { PiClipboard } from "react-icons/pi";
import Logo_Component from "../Components/Heading_components/Logo_component.js";
import SignatureComponent from "../Components/Heading_components/SignatureLine_component.js"
import HeadingLine from "../Components/Heading_components/HadingLine.js";

function Web_image_gallary() {

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };


  const navigate = useNavigate();
  const { category_id, category_title } = useParams();
  console.log("webg ", category_title );
  const filteredImages = event_images.find(item => item.id === category_id);


  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="webImageGallary-main-container p-0 m-0 background-patter   sig-bag-color d-flex flex-column min-vh-100 ">
      {/* <p className="">Image gallary {category}</p> */}


      {/* Logo and title line , TOP CONTAINER*/}
      <div className="container-fluid  pb-3">

        {/* Logo */}
        <Logo_Component/>
        <SignatureComponent text="Celebrating You, the Traditional Way!!"/>
        <HeadingLine text ={category_title} textColor="txt-white" />
        <Sidebar />

      </div>

      {/* Information and Image container,  Mid CONTAINER*/}
      <div className="bg-white rounded-5 border flex-grow-1">

        {/* <div className="container-fluid position-relative pt-5">
          <div className="container-sm d-flex justify-content-center">
            <div className=" d-flex flex-column text-light  Ad_image_info">
              <div className="h2">
                <span className="d-flex fs-2 sig-text-color justify-content-center">
                  {category_title}
                </span>
              </div>
              <div >
                <span className="d-flex justify-content-center">
                  <p className="text-primary-emphasis">
                    India, officially the Republic of India, is a vast South Asian nation with a rich, ancient civilization, ranking as the world's most populous country (since 2023) and largest democracy. Covering 3.28 million sq km, it is the 7th largest country by area, bordered by the Himalayas to the north and the Indian Ocean to the south. It has 28 states and 8 union territories, with New Delhi as the capital
                  </p></span>
              </div>
            </div>
          </div>
        </div> */}




        {filteredImages ? (

          <div className="container-sm my-5">
            <div className="container-sm d-flex mb-1 mt-4 px-5">
              <div className="position-relative  text-start h2 txt-indigo ms-1 ">
                <div className="position-absolute design_ele_star_css ">
                  <img className="design_ele_star_size" src={design_ele_star} />
                </div>
                Glimps of
              </div>

              <div className="position-relative text-start h2 txt-indigo ">
                <div className="position-absolute design_ele_line_css">
                  <img className="design_ele_line_size" src={design_ele_line} />
                </div>
                our Work
              </div>
            </div>

            <div className="container-sm my-3 d-flex justify-content-center">
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className=" my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {filteredImages.images.map((img, index) => (
                  <img key={index} src={img} style={{ width: "100%", borderRadius: "10px" }} alt="gallery" />
                ))}
              </Masonry>
            </div>
          </div>


        )
          :
          (
            <div className="container-sm  d-flex justify-content-center align-item-center p-5" >
              {/* <p  className="sig-text-color fs-2 Font-DancingScript">No Image Found...</p> */}
              <img className="rounded-5" src={process.env.PUBLIC_URL + '/images/ImageNotFound.png'}  style={{ width: "300px" }}/>
            </div>
          )}

      </div>

      {/* BOTTOM CONTAINER */}
        <Footer />
    </div>
  )
}
export default Web_image_gallary;
