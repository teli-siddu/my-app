import { useState,useEffect,useRef } from 'react';
import {useOutsideAlerter} from '../../hooks/useOutsideAlerter'

export const Navbar = (props) => {
    return (
      <nav className="navbar">
        <div className="navbar-nav">{props.children}</div>
      </nav>
    );
  };
export const NavItem = (props) => {
    return (
      <div className="nav-item">
        {props.children}
      </div>
    );
  };



export const NavDropdown=(props)=>{
    const ref = useRef(null)
    const [open,setOpen]=useState(false);
    useEffect(()=>{
      const checkIfClickedOutside = e => {
        // If the menu is open and the clicked target is not within the menu,
        // then close the menu
        if (open && ref.current && !ref.current.contains(e.target)) {
          setOpen(false)
        }
      }
      document.addEventListener("click", checkIfClickedOutside)
    return () => {
      // Cleanup the event listener
      document.removeEventListener("click", checkIfClickedOutside)
    }
    },[open]);



    function NavDropdownItem(props){
        return (
            <div className="nav-dropdown-item" >
            {props.children}
           </div>
        )
    }
    return (
         <>
           {/* {alert(clickedOutside)} */}
            <div className='nav-dropdown '>
                <div onClick={()=>{setOpen(!open)}} className="nav-dropdown-title">{props.title}</div>
                 {open &&
                 
                  <div className='nav-dropdown-items slideIn' ref={ref}> {props.children}</div>}  
            </div>
            </>
        
        
    )
}
