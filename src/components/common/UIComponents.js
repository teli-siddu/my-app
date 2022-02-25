import {useState} from 'react'
import './UIComponents.css'
import {FaSearch} from 'react-icons/fa'
export const SearchBox = () => {
  return(
   
        <div className="msi-searchbox">
            <input type="text" className="msi-search-text" placeholder="Search Products" />
            <button type="button" className="msi-search-btn"><FaSearch /></button>
        </div>
 
  ) 
};

export const NavItem = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
};

