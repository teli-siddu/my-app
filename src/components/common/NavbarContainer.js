
import React,{useState,useEffect} from 'react'
// import * as MenuApi from '../../api/menuapi'
import { ReactComponent as BellIcon } from "../../icons/bell.svg";
import { ReactComponent as MessengerIcon } from "../../icons/messenger.svg";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as ArrowIcon } from "../../icons/arrow.svg";
import { ReactComponent as CaretIcon } from "../../icons/caret.svg";
import { ReactComponent as ChevronIcon } from "../../icons/chevron.svg";
import { CSSTransition } from 'react-transition-group';
import './Navbar.css'
// import NavMenuOpions from './NavMenuOpionsflip';
 const NavbarContainer = () => {
  
  //  const [menuOptions,setMenuOptions]=useState([])
   
   useEffect(() => {
    
    // async function fetchData(){
    //  const menusRepsonse= await MenuApi.getMenusOptions();
    //  setMenuOptions(menusRepsonse);
    //  console.log(menuOptions);
    // }
    //fetchData();
     
   },[])
    return (
        <Navbar>
        {/* <NavItem icon={<PlusIcon />}></NavItem>
        <NavItem icon={<BellIcon />}></NavItem>
        <NavItem icon={<MessengerIcon />}></NavItem> */}
        <NavItem icon={<CaretIcon />}>
        <DropdownMenu />
        </NavItem>
       </Navbar>
    
    )
}

const Navbar = (props) => {
    return (
      <nav className="navbar">
        <ul className="navbar-nav">{props.children}</ul>
      </nav>
    );
  };
  
  const NavItem = (props) => {
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
  
  
  function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState("LEVEL-1");
    const [menuHeight,setMenuHeight]=useState(null);
    function calcHeight(el){
      const height=el.offsetHeight;
      setMenuHeight(height);
    }
  
    function DropdownItem(props) {
      
      return (
        <>
        <a href="#" className="menu-item" onClick={()=>props.goToMenu && setActiveMenu(props.goToMenu)}>
          {props.leftIcon && <span className="icon-button">{props.leftIcon}</span>}
         <span className='item-link'>{props.children}</span>  
         {props.rightIcon && <span className="icon-right">{props.rightIcon}</span>} 
        </a>
        <hr style={{margin:0}} />
        </>
      );
    }
    return (
      
     
<>
     <div className='triangle'></div>
      <div className="dropdown" style={{height:menuHeight}}>
        <CSSTransition 
        in={activeMenu==='LEVEL-1'}
          timeout={500}
           classNames='menu-primary' 
           unmountOnExit 
           onEnter={calcHeight}
           >
        <div className="menu">
          <DropdownItem 
        
          rightIcon={<ChevronIcon />}
          goToMenu='PRODUCTS'
          >
             PRODUCTS
          </DropdownItem>
          <DropdownItem 
        
          rightIcon={<ChevronIcon />}
          goToMenu='DESIGN TOOLS'
          >
            DESIGN TOOLS
          </DropdownItem>
          <DropdownItem 
        
          rightIcon={<ChevronIcon />}
          goToMenu='settings'
          >
            INSPIRATION
          </DropdownItem>
          <DropdownItem 
        
          rightIcon={<ChevronIcon />}
          goToMenu='settings'
          >
            RESOURCES
          </DropdownItem>
          <DropdownItem 
        
          rightIcon={<ChevronIcon />}
          goToMenu='settings'
          >
            FOR THE TRADE
          </DropdownItem>
          <DropdownItem 
        
          rightIcon={<ChevronIcon />}
          goToMenu='settings'
          >
            CONTACT US
          </DropdownItem>
          <DropdownItem>DEALER LOCATOR</DropdownItem>
        </div>
        </CSSTransition>
        {/* products children */}
        <CSSTransition 
        in={activeMenu ==='PRODUCTS' }
          timeout={500} 
          classNames='menu-secondary'
           unmountOnExit
           onEnter={calcHeight}
           >
        <div className="products-level-1">
        <DropdownItem goToMenu="LEVEL-1" leftIcon={<ArrowIcon />}>
           <div className='prev-menu'>   {activeMenu}  </div>
        </DropdownItem>
          <DropdownItem>FLOORING</DropdownItem> 
          <DropdownItem>COUNTERTOPS</DropdownItem> 
          <DropdownItem>BACKSPLASH & WALL TILE</DropdownItem> 
          <DropdownItem>HARDSCAPING</DropdownItem> 
          <DropdownItem>SINKS</DropdownItem> 
          <DropdownItem>FAUCCETS</DropdownItem> 
          <DropdownItem>NEW PRODUCTS</DropdownItem> 
          <DropdownItem>PRODUCT SEARCH</DropdownItem>  
          
          </div>
        </CSSTransition>
         {/* countertop children */}
         <CSSTransition 
        in={activeMenu ==='DESIGN TOOLS' }
          timeout={500} 
          classNames='menu-secondary'
           unmountOnExit
           onEnter={calcHeight}
           >
        <div className="products-level-1">
        <DropdownItem goToMenu="LEVEL-1" leftIcon={<ArrowIcon />}>
           <div className='prev-menu'> <span>  {activeMenu} </span> </div>
        </DropdownItem>
          <DropdownItem>FLOORING</DropdownItem> 
          <DropdownItem>COUNTERTOPS</DropdownItem> 
          <DropdownItem>BACKSPLASH & WALL TILE</DropdownItem> 
          <DropdownItem>HARDSCAPING</DropdownItem> 
          <DropdownItem>SINKS</DropdownItem> 
          <DropdownItem>FAUCCETS</DropdownItem> 
          <DropdownItem>NEW PRODUCTS</DropdownItem> 
          <DropdownItem>PRODUCT SEARCH</DropdownItem>  
          
          </div>
        </CSSTransition>
        </div>
        </>
    );
  }

export default NavbarContainer;
