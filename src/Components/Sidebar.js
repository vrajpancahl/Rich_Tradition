import { NavLink } from "react-router-dom";
import "../pages/landing_page_CSS.css";
import { RxCross2 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";


function Sidebar() {
    function closeList() {
        const ele = document.getElementById("sidebar-menu");
        ele.classList.toggle("HamburgerMenu-tab-width");
        const ele2 = document.getElementById("hamburgerMenu-icon");
        ele2.classList.toggle("display-none");
    }
    return (
        <div>

            <div
                id="hamburgerMenu-icon"
                className="position-absolute HamburgerMenu txt-gold fs-3 "
                onClick={() => {
                    const ele = document.getElementById("sidebar-menu");
                    ele.classList.toggle("HamburgerMenu-tab-width");
                    const ele2 = document.getElementById("hamburgerMenu-icon");
                    ele2.classList.toggle("display-none");
                }}
            >
                <RxHamburgerMenu />
            </div>

            <div
                id="sidebar-menu"
                className="sig-bag-color"
            >
                <div
                    className="HamburgerMenu d-flex flex-wrap justify-content-end txt-gold fs-2 ms-5 mt-3 "
                    onClick={(e) => {
                        closeList();
                    }}
                >
                    {/* cancle icon */}
                    <RxCross2 />
                </div>
                <ul
                    id="HamburgerMenu-tab-list"
                    className="d-flex flex-column align-items-start txt-gold pb-2  fs-5 "
                >
                    <NavLink to={'/about_us'} className={"nav-link"}><li onClick={()=>{ closeList();}}>About Us</li></NavLink>
                    <NavLink to={`/webImageGallary/${"all"}/${"Our Service"}`} className={"nav-link"}><li onClick={()=>{ closeList();}}>Photo Gallary</li></NavLink>
                    {/* <NavLink className={"nav-link"}><li onClick={()=>{closeList(); }}>Form Filling</li ></NavLink> */}
                    <NavLink className={"nav-link"}>
                        <li onClick={()=>{ 
                            closeList();  
                            window.scrollTo(0, document.body.scrollHeight);
                             }}>Contact Us
                        </li >
                    </NavLink>

                    <NavLink to={'/termsAndConditions'} className={"nav-link"}> <li onClick={()=>{ closeList();}}>Terms and condition</li></NavLink>
                </ul>
            </div>
        </div>
    );
}
export default Sidebar;

