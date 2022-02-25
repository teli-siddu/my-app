import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars } from 'react-icons/fa'

const NavMenuOpions = ({menuOptions}) => {
    const [closeOpenMenu,setCloseOpenMenu]=useState(false);
    const [isActive,setIsActive]=useState(false);
    const [target,SetTarget]=useState('')

    const showHideOptions=(target)=>{
      setIsActive(!isActive);
      SetTarget(target);
    }
    return (
      
      <>
     
        <div className={closeOpenMenu?"mob-nav-menu nav-menu":"nav-menu"}>
      {  console.log(menuOptions)}
        <ul>
          <li>
          <a href='#' onClick={()=>{ showHideOptions(menuOptions.electronics.title)}} >{menuOptions.electronics.title}</a>
          {/* <Link to={menuOptions.electronics.url==="#"?"#":menuOptions.electronics.url}>{menuOptions.electronics.title}</Link> */}
          {

          }
          
          </li>
         
          <li>
          <a href='#' onClick={()=>{showHideOptions(menuOptions.appliances.title);}} >{menuOptions.appliances.title}</a>
          {/* <Link to={menuOptions.appliances.url}>{menuOptions.appliances.title}</Link> */}
          </li>
          <li>
          <a href='#' onClick={()=>{showHideOptions(menuOptions.men.title);}} >{menuOptions.men.title}</a>
          {/* <Link to={menuOptions.men.url}>{menuOptions.men.title}</Link> */}
          </li>
          <li>
          <a href='#' onClick={()=>{showHideOptions(menuOptions.women.title);}} >{menuOptions.women.title}</a>
          {/* <Link to={menuOptions.women.url}>{menuOptions.women.title}</Link> */}
          </li>
         
          <li>
          <a href='#' onClick={()=>{showHideOptions(menuOptions["babykids"].title);}} >{menuOptions["babykids"].title.replace(/&amp;/g, '&')}</a>
          {/* <Link to={menuOptions["babykids"].url}>{menuOptions["babykids"].title.replace(/&amp;/g, '&')}</Link> */}
          </li>
          <li>
          <a href='#' onClick={()=>{showHideOptions(menuOptions["home-kitchen"].title);}} >{menuOptions["home-kitchen"].title.replace(/&amp;/g, '&')}</a>
          {/* <Link to={menuOptions["home-kitchen"].url}>{menuOptions["home-kitchen"].title.replace(/&amp;/g, '&')}</Link> */}
          </li>
          <li>
          <a href='#' onClick={()=>{showHideOptions(menuOptions["books-media"].title);}} >{menuOptions["books-media"].title}</a>
          {/* <Link to={menuOptions["books-media"].url}>{menuOptions["books-media"].title}</Link> */}
          </li>
         
          <li>
          <Link to={menuOptions.Flights.url}>{menuOptions.Flights.title}</Link>
          </li>
          <li>
          <Link to={menuOptions["offer-zone"].url}>{menuOptions["offer-zone"].title}</Link>
          </li>
          
  
        </ul>

        
        <div className="menu-icon">
        <a href='#' onClick={()=>setCloseOpenMenu(!closeOpenMenu)}>
        <FaBars />
        </a>
         
        </div>
        </div>

        <div className='sub-menu-options'>
          {

            //console.log(menuOptions.electronics.tabs && menuOptions.electronics.tabs[0].columns) ;
           isActive&&target===menuOptions.electronics.title && menuOptions.electronics.tabs && menuOptions.electronics.tabs[0].columns.map((colArray,index)=>{
              return (
               // console.log(colArray)
               <div className={`${isActive&&target===menuOptions.electronics.title?"active":""} columns`}>
                 { 
                  colArray.map((obj,index)=>{
                  return (
                    <div className='categories'>
                    <div className={obj.type && obj.type}>
                       <Link to={obj.url}> {obj.title}</Link>
                    </div>
                   
                    </div>
                  )
                 })
                }
               </div>
              )
            })
          }
          {
            isActive&&target===menuOptions.appliances.title && menuOptions.appliances.tabs && menuOptions.appliances.tabs[0].columns.map((colArray,index)=>{
              return (
               // console.log(colArray)
               <div className={`${isActive&&target===menuOptions.electronics.title?"active":""} columns`}>
                 { 
                  colArray.map((obj,index)=>{
                  return (
                    <div className='categories'>
                    <div className={obj.type && obj.type}>
                       <Link to={obj.url}> {obj.title}</Link>
                    </div>
                   
                    </div>
                  )
                 })
                }
               </div>
              )
            })
          }
          {
            isActive&&target===menuOptions.men.title &&  menuOptions.men.tabs && menuOptions.men.tabs[0].columns.map((colArray,index)=>{
              return (
               // console.log(colArray)
               <div className={`${isActive&&target===menuOptions.electronics.title?"active":""} columns`}>
                 { 
                  colArray.map((obj,index)=>{
                  return (
                    <div className='categories'>
                    <div className={obj.type && obj.type}>
                       <Link to={obj.url}> {obj.title}</Link>
                    </div>
                   
                    </div>
                  )
                 })
                }
               </div>
              )
            })
          }
          {
            isActive&&target===menuOptions.women.title && menuOptions.women.tabs && menuOptions.men.tabs[0].columns.map((colArray,index)=>{
              return (
               // console.log(colArray)
               <div className={`${isActive&&target===menuOptions.electronics.title?"active":""} columns`}>
                 { 
                  colArray.map((obj,index)=>{
                  return (
                    <div className='categories'>
                    <div className={obj.type && obj.type}>
                       <Link to={obj.url}> {obj.title}</Link>
                    </div>
                   
                    </div>
                  )
                 })
                }
               </div>
              )
            })
          }
          {
            isActive&&target===menuOptions["babykids"].title  && menuOptions["babykids"].tabs && menuOptions["babykids"].tabs[0].columns.map((colArray,index)=>{
              return (
               // console.log(colArray)
               <div className={`${isActive&&target===menuOptions.electronics.title?"active":""} columns`}>
                 { 
                  colArray.map((obj,index)=>{
                  return (
                    <div className='categories'>
                    <div className={obj.type && obj.type}>
                       <Link to={obj.url}> {obj.title}</Link>
                    </div>
                   
                    </div>
                  )
                 })
                }
               </div>
              )
            })
          }
          {
            isActive&&target===menuOptions["home-kitchen"].title && menuOptions["home-kitchen"].tabs && menuOptions["home-kitchen"].tabs[0].columns.map((colArray,index)=>{
             
              return (
              
               <div className={`${isActive&&target===menuOptions.electronics.title?"active":""} columns`}>
                 { 
                  
                  colArray.map((obj,index)=>{
                    {console.log(obj.url);}
                  return (
                    <div className='categories'>
                    <div className={obj.type && obj.type}>
                       {obj.url&&<Link to={obj.url}> {obj.title}</Link>} 
                    </div>
                   
                    </div>
                  )
                 })
                }
               </div>
              )
            })
          }
          {
            isActive&&target===menuOptions["books-media"].title && menuOptions["books-media"].tabs && menuOptions["books-media"].tabs[0].columns.map((colArray,index)=>{
              return (
               // console.log(colArray)
               <div className={`${isActive&&target===menuOptions.electronics.title?"active":""} columns`}>
                 { 
                  colArray.map((obj,index)=>{
                  return (
                    <div className='categories'>
                    <div className={obj.type && obj.type}>
                       <Link to={obj.url}> {obj.title}</Link>
                    </div>
                   
                    </div>
                  )
                 })
                }
               </div>
              )
            })
          }
        </div>
        </>

       
    )
}

export default NavMenuOpions


