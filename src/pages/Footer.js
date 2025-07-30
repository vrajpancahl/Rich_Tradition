import "../pages/Footer_CSS.css";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { full_logo } from "./image_import";

function Footer() {
  return (
    <div className="container-fluid sig-bag-color p-3 background-patter">
      <div className="container-sm d-flex flex-row  justify-content-around flex-wrap "
        style={{"gap": "1rem"}}>
        <div
          className="d-flex align-items-center justify-content-center "
          style={{ width: "250px" }}
        >
          <img
          style={{"width": "100%"}}
           src={full_logo} />
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
              <span  className="font-ease-transition"><a id="mobile_number" href="tel:9727056102">9727056120</a></span>
            </div>
          </div>
          <div className="m-1 fs-6 fs-md-4  text-light d-flex flex-wrap flex-column p-0">
            <div className=" contact-css">
              <MdEmail  className="ms-2" />
              <span  className="font-ease-transition"><a id="mobile_number" href="mailto:vrajpanchal1110@gmail.com">Email</a></span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Footer;
