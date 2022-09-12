import { Link, Outlet, useLocation } from "react-router-dom";

/* IMAGES */
import logo from '../../assets/icons/logo.svg'
import { ReactComponent as WishLogo } from '../../assets/icons/shooting-star.svg';

function Layout() {
  const location = useLocation();

  return (
    <>
      <div className="container mt-5">
        <div className="row py-4">
          <div className="col d-flex justify-content-center">
            <img src={logo} alt="Logo" height={100} width={200} />
          </div>
        </div>
        <div className="row justify-content-center pt-2">
          <div className="col-6 d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <WishLogo fill='yellow' height={55} width={55} alt="Logo wish wallet" />
              <h1 className="ps-2 m-0">Wish Wallet</h1>
            </div>
            {location.pathname === '/' &&
              <Link to="add-token" className="button button-blue" >Add Token</Link>
            }
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Layout;

