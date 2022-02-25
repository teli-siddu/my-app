import React from 'react'
import { Link } from 'react-router-dom'
import {Navbar,NavItem,NavDropdown, NavDropdownItem} from './NavbarComponents'

const TopNavbarContainer = () => {
  return (
    <Navbar>
  
      <NavDropdown title="PRODUCTS">
        <NavItem><Link to='flooring/'>FLOORING</Link></NavItem>
        <NavItem><Link to='flooring/'>Countertops</Link></NavItem>
        <NavItem><Link to='flooring/'>Backsplash & Wall Tile</Link></NavItem>
        <NavItem><Link to='flooring/'>Hardscaping</Link></NavItem>
        <NavItem><Link to='flooring/'>Sinks</Link></NavItem>
        <NavItem><Link to='flooring/'>Faucets</Link></NavItem>
        <NavItem><Link to='flooring/'>Natural Stone Collections</Link></NavItem>
        <NavItem><Link to='flooring/'>New Products</Link></NavItem>
        <NavItem><Link to='flooring/'>Product Search</Link></NavItem>
      </NavDropdown>
    
      <NavDropdown title="DESIGN TOOLS">
        <NavItem><Link to='flooring/'>VISUALIZERS</Link></NavItem>
        <NavItem><Link to='flooring/'>Backsplash Tile Guide</Link></NavItem>
        <NavItem><Link to='flooring/'>Preview Slabs in Stock</Link></NavItem>
        <NavItem><Link to='flooring/'>Image Search Tool</Link></NavItem>
        <NavItem><Link to='flooring/'>Floor Pattern Selector</Link></NavItem>
       
      </NavDropdown>
    <NavDropdown title="INSPIRATION"></NavDropdown>
    <NavDropdown title="RESOURCES"></NavDropdown>
    <NavDropdown title="FOR THE TRADE"></NavDropdown>
    <NavDropdown title="CONTACT US"></NavDropdown>
    <NavDropdown title="DEALER LOCATOR"></NavDropdown>
   </Navbar>
  )
}

export default TopNavbarContainer