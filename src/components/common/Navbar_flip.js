
import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import * as MenuApi from '../../api/menuapi'
import './Navbar.css'
import NavMenuOpions from './NavMenuOpionsflip';
 const Navbar = () => {
  
   const [menuOptions,setMenuOptions]=useState({})
   
   useEffect(() => {
    
    async function fetchData(){
     const menusRepsonse= await MenuApi.getMenusOptions();
     setMenuOptions(menusRepsonse[0]);
     console.log(menuOptions);
    }
    fetchData();
     
   },[])
    return (
      <div>
        { menuOptions && Object.keys(menuOptions).length !== 0 && <NavMenuOpions menuOptions={menuOptions} />   }
      </div>
    
    )
}

export default Navbar;
