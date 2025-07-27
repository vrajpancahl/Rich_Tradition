import "../pages/Footer_CSS.css";
import { IoMdCall } from "react-icons/io";
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
          <div className="m-1 fs-2 text-warning   contact-css">
            Contact
          </div>
          <div className="m-1 fs-6 fs-md-4  text-light d-flex flex-wrap flex-column p-0">
            <div className=" contact-css">Dhruv A Panchal</div>
            <div className=" contact-css">
              <IoMdCall className="ms-2" />
              <span className="font-ease-transition"><a href="tel:9727056102">9727056120</a></span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Footer;
