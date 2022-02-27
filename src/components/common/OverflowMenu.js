import React, { useState } from 'react'
import classnames from 'classnames';
import {BiDotsVerticalRounded } from 'react-icons/bi'
import { NavItem,NavDropdownMore } from './NavbarComponents';

export default function OverflowMenu({ children, className, visibilityMap }) {

 const [open,setOpen]=useState(false)
  return (
    <>
      <NavDropdownMore className="nav-dropdown-more">
        <div className="icon-button overflow-btn" onClick={()=>setOpen(!open)}>
          <BiDotsVerticalRounded />
        </div>
      </NavDropdownMore>
     {open && <div className={className} id="more_nav_items">
        <div className="overflow-nav-items" i>
          {React.Children.map(children, (child) => {
            if (!visibilityMap[child.props["targetId"]]) {
              return (
                <div className="nav-item">
                  {React.cloneElement(child, {
                    className: classnames(child.className, "in-oveflow"),
                  })}
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>}
    </>
  );
}

