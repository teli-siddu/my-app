import React from "react";
import NavbarContainer from "./components/common/NavbarContainer";
import TopNavbarContainer from './components/common/TopNavbarContainer'
import { BrowserRouter as Router } from "react-router-dom";
import {Responsive} from './components/common/Responsive'
import "./style.css";
// import Header from "./components/common/Header";
const App = () => {
  console.log(process.env);
  return (
    <Router>
    
      <Responsive displayIn={["Mobile"]}>
        <div className="ss-navbar-container">
          <NavbarContainer />
        </div>
      </Responsive>
      <Responsive displayIn={["Tablet","Laptop"]}>
        <div className="mm-navbar-container">
              <TopNavbarContainer />
        </div>
      </Responsive>
     

    </Router>

    
    
  );
};


export default App;