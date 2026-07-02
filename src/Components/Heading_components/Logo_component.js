import { useNavigate } from "react-router-dom";

function Logo_Component() {
    const navigate = useNavigate();
    return (
        <div className="navbar p-0 ">
            <div className="container-fluid d-flex justify-content-center ">
                <a className="navbar-brand " onClick={() => { navigate("/Rich_Tradition/") }}>
                    <img
                        src={process.env.PUBLIC_URL + "/images/logo.png"}
                        alt="Logo"
                        width="200"
                        height="100"
                        className="d-inline-block align-text-top"
                    />
                </a>
            </div>
        </div>
    )
}
export default Logo_Component;