import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { useState, useEffect, useRef } from "react";
import {useNavigate } from "react-router-dom";
import {
  design_ele_star,
  design_ele_line,
} from "./image_importer.js";


function Services_contener({heading, images }){
    const navigate = useNavigate();
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
        <div className="container-sm pe-4 bg-white">
            {/* Heading container */}
            <div className="container-sm d-flex mb-1 mt-4 ">
                <div className="position-relative  text-start h2 txt-indigo ms-1 ">
                    <div className="position-absolute design_ele_star_css ">
                        <img className="design_ele_star_size" src={design_ele_star} />
                    </div>
                    {heading[0]}
                </div>

                <div className="position-relative text-start h2 txt-indigo ">
                    <div className="position-absolute design_ele_line_css">
                        <img className="design_ele_line_size" src={design_ele_line} />
                    </div>
                    {heading[1]}
                </div>
            </div>
            {/* Heading container END */}

            {/* Card container */}
            <div className="container-sm my-2 p-1  position-relative d-flex justify-content-center ">
                {/* Service container start */}
                <div
                    ref={scrollRef}
                    name="Service-container"
                    className=" d-flex container-fluid overflow-x-scroll flex-row flex-nowrap p-0"
                    style={{ width: "100%", scrollbarWidth: "none" }}
                >
                    {images.map((e,i) => {
                        return (
                            <div
                                className="card card-width d-flex align-items-center m-2 z-1"
                                onClick={(x) => {
                                     const service_title = (heading[0] + heading[1]);
                                    console.log("ser: ",service_title);
                                    if( service_title !== "Event Manager")
                                    {
                                        navigate(`/WebImageGallary/${e.id}/${e.title}`);
                                    }
                                }}
                                onMouseEnter={(e) => {
                                    hover_text_apply(e.currentTarget);
                                }}
                                onMouseLeave={(e) => {  
                                    remove_hover_text(e.currentTarget);
                                }}
                            >
                                {/* {console.log(e.url)} */}
                                {/* {console.log("id =>" ,e.id)} */}
                                <img
                                    className="card-img col-sm Height-100per"
                                    src={e.url}
                                    alt="image"
                                />
                                <div
                                    className="card-body 
                                    z-1 
                                    position-absolute rounded gradient-backgroundcolor"
                                >
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
export default Services_contener;