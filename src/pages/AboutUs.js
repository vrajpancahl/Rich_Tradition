import Sidebar from "../Components/Sidebar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import HeadingLine from "../Components/Heading_components/HadingLine";
import Logo_Component from "../Components/Heading_components/Logo_component";
function AboutUs() {
    const navigate = useNavigate();

    return (
        <div className="background-patter sig-bag-color d-flex flex-column min-vh-100">
            {/* <Navbar /> */}

            <div className="container-fluid   pb-2">
                {/* Logo */}
                <Logo_Component/>
                <HeadingLine text ="About Us" textColor="txt-gold" />
                <Sidebar />
            </div>


            <div className="bg-white rounded-5 flex-grow-1 py-5">
                <div className="container-md ">
                    <p>
                        At Rich Traditions, we believe every occasion deserves to be celebrated with elegance, authenticity, and unforgettable experiences. As a premium event management company, we specialize in curating weddings, corporate gatherings, cultural celebrations, and personal milestones that blend modern sophistication with the richness of Indian heritage.
                    </p>

                    <p>
                        From concept to execution, our team ensures that every detail reflects perfection — whether it’s décor, hospitality, entertainment, or overall coordination. Guided by creativity, professionalism, and cultural values, we transform your vision into moments that last a lifetime.
                    </p>

                    <p>
                        ✨ Rich Traditions — Where Every Occasion Becomes a Legacy.
                    </p>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default AboutUs;