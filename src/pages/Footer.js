import "../pages/Footer_CSS.css";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
// import { full_logo } from "../pages/image_import.js";
import "../pages/landing_page_CSS.css";
function Footer() {

  return (
    <div className="container-fluid sig-bag-color p-3 background-patter position-relative mg-0">

      <div className="container-sm d-flex flex-row  justify-content-around flex-wrap" style={{ "gap": "1rem", paddingTop: "60px" }}>
        {/* <div id="vraj" className="container-fluid rounded-head position-absolute  " style={{top: "-5rem"}}> */}
        {/* <div className="container-fluid  position-absolute  rounded-head  rounded-bottom-5 " style={{ top: "-5rem" }}></div> */}
          {/* <p>Hello</p> */}
        

        <div
          className="d-flex align-items-center justify-content-center"
          style={{ width: "250px" }}
        >
          <img
            style={{ "width": "100%" }}
            src={process.env.PUBLIC_URL + "/images/logo.png"} />
        </div>

        <div className="d-flex flex-column   ">
          <div
            id="footer-contect-container"
            className="m-1 text-warning contact-css footer-contect-container-css">
            Contact
          </div>
          <div className="fs-6 fs-md-4  text-light d-flex flex-wrap flex-column p-0">
            <div className="mb-1 contact-css">Dhruv A Panchal</div>
            <div className=" contact-css">
              <IoMdCall className="ms-2" />
              <span className="font-ease-transition"><a id="mobile_number" href="tel:9727056102">9727056120</a></span>
            </div>
          </div>
          <div className="m-1 fs-6 fs-md-4  text-light d-flex flex-wrap flex-column p-0">
            <div className=" contact-css">
              <MdEmail className="ms-2" />
              <span className="font-ease-transition"><a id="mobile_number" href="mailto:vrajpanchal1110@gmail.com">Email</a></span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Footer;
