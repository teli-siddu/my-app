import React from 'react'
import { Link } from 'react-router-dom'
import {Navbar,NavItem,NavDropdown} from './NavbarComponents'
import IntersectionObserverWrapper from './InteractionObserver'

const TopNavbarContainer = () => {
  
  return (
    <Navbar>

<IntersectionObserverWrapper>
        <NavDropdown title="PRODUCTS" className="products" targetId="PRODUCTS" >
    
        <NavItem><Link className='nav-link' to='flooring/'>FLOORING</Link></NavItem>
        <NavItem><Link className='nav-link' to='flooring/'>Countertops</Link></NavItem>
        <NavItem><Link className='nav-link' to='flooring/'>Backsplash & Wall Tile</Link></NavItem>
        <NavItem><Link className='nav-link' to='flooring/'>Hardscaping</Link></NavItem>
        <NavItem><Link className='nav-link' to='flooring/'>Sinks</Link></NavItem>
        <NavItem><Link className='nav-link' to='flooring/'>Faucets</Link></NavItem>
        <NavItem><Link className='nav-link' to='flooring/'>Natural Stone Collections</Link></NavItem>
        <NavItem><Link className='nav-link' to='flooring/'>New Products</Link></NavItem>
        <NavItem><Link className='nav-link' to='flooring/'>Product Search</Link></NavItem>
      </NavDropdown>
    
      <NavDropdown title="DESIGN TOOLS" targetId="DESIGN TOOLS" >
        <NavItem><Link className='nav-link' to='flooring/'>VISUALIZERS</Link></NavItem>
        <NavItem><Link className='nav-link' to='flooring/'>Backsplash Tile Guide</Link></NavItem>
        <NavItem><Link className='nav-link' to='flooring/'>Preview Slabs in Stock</Link></NavItem>
        <NavItem><Link className='nav-link' to='flooring/'>Image Search Tool</Link></NavItem>
        <NavItem><Link className='nav-link' to='flooring/'>Floor Pattern Selector</Link></NavItem>
       
      </NavDropdown>
    <NavDropdown title="INSPIRATION" targetId="INSPIRATION"></NavDropdown>
    <NavDropdown title="RESOURCES" targetId="RESOURCES"></NavDropdown>
    <NavDropdown title="FOR THE TRADE" targetId="FOR THE TRADE"></NavDropdown>
    <NavDropdown title="CONTACT US" targetId="CONTACT US">
    <NavItem><Link className='nav-link' to='flooring/'>FLOORING</Link></NavItem>
        <NavItem><Link className='nav-link' to='flooring/'>Countertops</Link></NavItem>
        <NavItem><Link className='nav-link' to='flooring/'>Backsplash & Wall Tile</Link></NavItem>
        <NavItem><Link className='nav-link' to='flooring/'>Hardscaping</Link></NavItem>
        <NavItem><Link className='nav-link' to='flooring/'>Sinks</Link></NavItem>
        <NavItem><Link className='nav-link' to='flooring/'>Faucets</Link></NavItem>
        <NavItem><Link className='nav-link' to='flooring/'>Natural Stone Collections</Link></NavItem>
        <NavItem><Link className='nav-link' to='flooring/'>New Products</Link></NavItem>
        <NavItem><Link className='nav-link' to='flooring/'>Product Search</Link></NavItem>
    </NavDropdown>
    <NavDropdown title="DEALER LOCATOR" targetId="DEALER LOCATOR"></NavDropdown>
    </IntersectionObserverWrapper>
   </Navbar>
 
  )
}

export default TopNavbarContainer