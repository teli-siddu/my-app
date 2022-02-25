import { Link } from 'react-router-dom';
import {SearchBox} from './UIComponents'
import './Header.css'
const Header = () => {
  return (
    <nav className="msi-header-wrapper">
    <div className="msi-logo">
        <Link to="/">
           <img src="https://cdn.msisurfaces.com/images/svg/msi-logo.svg" alt="logo" />
        </Link>
    </div>
      <div className="msi-searchbox-wrapper">
        <SearchBox />
      </div>
      <div className="msi-navbar-wrapper">
            <ul>
                <li>
                    <Link to="/careers/">CAREERS</Link>
                    <Link to="/vendor-portal/">VENDOR</Link>
                    <Link to="/customer-portal/">My MSI</Link>
                    <Link to="/vendor-portal/">CHAT NOW</Link>
                </li>
            </ul>
      </div>
    </nav>
  );
};

export default Header;
