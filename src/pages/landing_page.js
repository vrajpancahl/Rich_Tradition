import {
  Slide_img1, Slide_img2,Slide_img3, Slide_img4, Slide_img5,Slide_img6,Slide_img7,Slide_img8,
  design_ele_star,
  design_ele_line,
} from "./image_import";
import "../pages/landing_page_CSS.css";
import "../pages/media_query_CSS.css";
import Navbar from "./Navbar";
import { useState, useEffect, useRef } from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import Footer from "../pages/Footer";
import AutoType from "../pages/AutoType.js";
import { HiOutlineNumberedList } from "react-icons/hi2";
import { MdDownloadDone } from "react-icons/md";

function ImageContainer({ heading, images }) {
  const scrollRef = useRef(null);
  const [scrollButton, set_scrollButton] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (el.scrollWidth > el.clientWidth) {
      set_scrollButton(true);
    } else {
      set_scrollButton(false);
    }
  }, []);

  function hover_text_apply(e) {
    let ele = e.querySelector('[name="text_of_card"]');
    ele.classList.remove("fs-3");
    ele.classList.add("fs-2");
  }

  function remove_hover_text(e) {
    let ele = e.querySelector('[name="text_of_card"]');
    ele.classList.remove("fs-2");
    ele.classList.add("fs-3");
  }

  function scrollLeft(e) {
    const prnt = e.parentElement;
    const scrollBox = prnt.querySelector('[name="Service-container"]');
    scrollBox.scrollBy({ left: -200, behavior: "smooth" });
  }

  function scrollRight(e) {
    const prnt = e.parentElement;
    const scrollBox = prnt.querySelector('[name="Service-container"]');
    scrollBox.scrollBy({ left: 200, behavior: "smooth" });
  }

  return (
    <div className="container-sm">
      {/* Heading container */}
      <div className="container-sm d-flex mb-1 mt-4 ">

        <div className="position-relative  text-start h2 txt-indigo ms-1 ">
          <div className="position-absolute design_ele_star_css ">
            <img 
              className="design_ele_star_size"
              src={design_ele_star}/>
          </div>
          {heading[0]}
          
        </div>

        <div className="position-relative text-start h2 txt-indigo ">
          <div className="position-absolute design_ele_line_css">
            <img 
            className="design_ele_line_size"
            src={design_ele_line}/>
          </div>
            {heading[1]}
        </div>

      </div>
      {/* Heading container END */}

      {/* Card container */}
      <div
        className="container-sm my-2 p-1  position-relative d-flex justify-content-center "
      >
        {/* Service container start */}
        <div ref={scrollRef}
          name="Service-container"
          className="d-flex container-fluid overflow-x-scroll flex-row flex-nowrap p-0"
          style={{ width: "100%", scrollbarWidth: "none" }}
        >
          {images.map((e) => {
            return (
              <div
                className="card card-width d-flex align-items-center m-2"
                onClick={()=>{
                      window.scrollTo(0, document.body.scrollHeight);
                      const cotect_container = document.getElementById("footer-contect-container");
                      cotect_container.classList.add("text-size-animation");
                      setTimeout(()=>{
                        cotect_container.classList.remove("text-size-animation");
                      },6000);
                }}
                onMouseEnter={(e) => {
                  hover_text_apply(e.currentTarget);
                }}
                onMouseLeave={(e) => {
                  remove_hover_text(e.currentTarget);
                }}
              >
                <img
                  src={require(`../images/${e.imageName}`)}
                  className="card-img col-sm Height-100per"
                  alt="image"
                />
                <div className="card-body z-1 position-absolute rounded gradient-backgroundcolor">
                  <h5
                    name="text_of_card"
                    className="card-title fs-3 text-light font-style-Dancing-script text-transition"
                  >
                    {e.title}
                  </h5>
                </div>
              </div>
            );
          })}
        </div>

        {/* Next button*/}
        {scrollButton == true && (
          <div
            className="z-1 position-absolute container-next-button d-flex justify-content-center align-content-center"
            onClick={(e) => {
              scrollRight(e.currentTarget);
            }}
          >
            <span className="text-light fs-2 rounded-pill nxt-prv-btn-bag p-1">
              <GrNext />
            </span>
          </div>
        )}
        {/* Next button End */}

        {/* previous button */}
        {scrollButton == true && (
          <div
            className="z-1 position-absolute container-previous-button  d-flex justify-content-center align-content-center"
            onClick={(e) => {
              scrollLeft(e.currentTarget);
            }}
          >
            <span className="text-light fs-2 rounded-pill nxt-prv-btn-bag p-1">
              <GrPrevious />
            </span>
          </div>
        )}
        {/* previous button END*/}
      </div>
      {/* Service container END */}
    </div>
  );
}

function LandingPage() {
  const Ad_images_arr = [Slide_img1, Slide_img2,Slide_img3,Slide_img4, Slide_img5,Slide_img6,Slide_img7,Slide_img8];
  const Ad_images_arr_len = Ad_images_arr.length;
  const [Ad_image_index, set_Ad_image_index] = useState(1);
  const [autoPlay, set_autoPlay] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  let intervalRef = useRef(null);

   

  useEffect(() => {
    if (intervalRef.current) {
      clearTimeout(intervalRef.current);
    }

    // Only set a new timeout if autoplay is true
    if (autoPlay) {
      intervalRef.current = setTimeout(() => {
        next_image();
      }, 6000);
    }

    // Cleanup function to clear timeout on unmount or re-run
    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
      }
    };
  });

  // Changing image to next
   function next_image() {
    setIsTransitioning(true);
    const cont= document.getElementById("Ad_image_container");
    const Ele = document.querySelector('[name="Ad_image"]');
    let Ele_Values= Ele.getBoundingClientRect();
    let tw= Ele_Values.width;
    if(Ad_image_index == Ad_images_arr_len){
      tw = (tw*(Ad_images_arr_len));
      cont.scrollBy({ left: -(tw), behavior: "smooth" });
      set_Ad_image_index(1);
    }
    else{
      cont.scrollBy({ left: tw, behavior: "smooth" });
      set_Ad_image_index(Ad_image_index + 1);
    }
    setTimeout(() => setIsTransitioning(false), 500);
    }

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
    <div>
      <Navbar />

      <div className="m-0 p-0">
         
        <div
          className="position-relative  p-0 border border-0 "
          style={{width:"100%"}}
        >
          <div className="position-absolute d-flex flex-column text-light z-1 Ad_image_info">
              <div className="h2"><span className="d-flex justify-content-start fs-2">Expert in</span></div>
              <div className="mb-4" 
              ><span ><AutoType/></span></div>
              <div className="d-flex flex-row flex-wrap ">
                  <div className="d-flex flex-row ">
                    <div className="d-flex align-items-center  ms-2  echivmentIcon">
                       <MdDownloadDone />
                    </div>
                    <div className="d-flex flex-column  ms-4 echivmentText">
                          <div className="d-flex justify-cotent-start ">
                            100+
                          </div>
                          <div className=" ">
                            Events Experience 
                          </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row ">
                    <div className="d-flex align-items-center  ms-2  echivmentIcon">
                        <HiOutlineNumberedList />
                    </div>
                    <div className="d-flex flex-column  echivmentText">
                          <div className="d-flex justify-cotent-start ">
                            20+
                          </div>
                          <div className=" ">
                            Services 
                          </div>
                    </div>
                  </div>
              </div>
          </div>

          <div 
          id="Ad_image_container"
          className=" d-flex flex-row overflow-x-hidden Ad_image_container_size p-0">
          {Ad_images_arr.map((e, i) => {
            return (
              <div className="p-0">
              <img 
              name="Ad_image"
              style={{ height: "100%",
                 width: "100vw",
                 flexShrink: "0",
                scrollSnapAlign: "start"}}
              src={e} />
            </div>
          );
        })}
        </div>
        </div>
      </div>

      <ImageContainer heading={["Wedding"," Service"]} images={weddingService} />
      <ImageContainer
        heading={["Special"," Services"]}
        images={specialServiceForWedding}
      />
      <ImageContainer heading={["Flower"," Decoration"]} images={flowerDecoration} />
      <ImageContainer
        heading={["Festival"," Decoration"]}
        images={festivalDecoration}
      />
      <ImageContainer
        heading={["General"," Decoration"]}
        images={generalDecoration}
      />

      <Footer/>
    </div>
  );
}

export default LandingPage;
