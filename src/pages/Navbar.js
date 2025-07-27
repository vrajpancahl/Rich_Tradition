import '../pages/Navbar_CSS.css';
import { logo } from './image_import';

function Navbar() {
  return (
      <div className="navbar sig-bag-color  p-0 background-patter"
      >
        <div className="container-fluid d-flex justify-content-center ">
          <a className="navbar-brand " href="#">
            <img
              src={logo}
              alt="Logo"
              width="160"
              height="70"
              className="d-inline-block align-text-top"
            />
          </a>
        </div>
      </div>
  );
}

export default Navbar;