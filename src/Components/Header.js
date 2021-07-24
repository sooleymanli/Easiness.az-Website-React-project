import React, {useState} from 'react'
// import { Link } from 'react-router-dom';
import './HamburgerMenu.css'
import $ from 'jquery'
import Logo from '../Img/logo2.png'
// import { useLocation } from "react-router-dom";
import './Header.css'


function Header() {
  // const location = useLocation();
  // const { pathname } = location;
  // const splitLocation = pathname.split("/");

const [menu,setMenu] = useState("")
const [mobileMenu,setMobileMenu]=useState("none")

const changeMenuClass = ()=>{
 
  if (menu === ""){
    setMenu("active")
    setMobileMenu("flex")
    $(".mobile-menu").fadeIn(500);
  }else if(menu==="active"){
    setMenu("")
    
    $(".mobile-menu").fadeOut(1000)
  }
}


const clickMenu = ()=>{
  setMenu("")
  $(".mobile-menu").fadeOut(1000)

}

    return (

        <header id="header" className="d-flex align-items-center sticky-top">
        <div className="container d-flex justify-content-between align-items-center ">
    
          <div className="logo">
            {/* <h1><Link to="/">Easiness</Link></h1> */}
       
            {/* <Link to="/"><img src={Logo} alt="Ana səhifə" className="img-fluid"/></Link> */}
           <a href="/#"><img src={Logo} alt="Ana səhifə" className="img-fluid"/></a>
          </div>
    
          <nav id="navbar" className="navbar">
            <ul>
           
              {/* <li><Link className={splitLocation[1] === "" ? "active" : ""} to="/">Ana səhifə</Link></li> */}
              <li><a href="/#">Ana səhifə</a></li>
              <li><a href="/#about">Haqqımızda</a></li>
              <li><a href="/#services">Xidmətlər</a></li>
              <li><a href="/#clients">Partnyorlar</a></li>
              <li><a href="/#contact">Əlaqə</a></li>
              {/* <li><Link  className={splitLocation[1] === "contact" ? "active" : ""} to="/contact">Əlaqə</Link></li> */}
            </ul>


<div className="hamburger-menu-button">
{/* <div className={menu} onClick={changeMenuClass.bind()}>
    <svg className="burger" version="1.1" height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" >
      <path className="line line1" d="M 30,65 H 70"/>
      <path className="line line2" d="M 70,50 H 30 C 30,50 18.644068,50.320751 18.644068,36.016949 C 18.644068,21.712696 24.988973,6.5812347 38.79661,11.016949 C 52.604247,15.452663 46.423729,62.711864 46.423729,62.711864 L 50.423729,49.152542 L 50.423729,16.101695"/>
      <path className="line line3" d="M 30,35 H 70 C 70,35 80.084746,36.737688 80.084746,25.423729 C 80.084746,19.599612 75.882239,9.3123528 64.711864,13.559322 C 53.541489,17.806291 54.423729,62.711864 54.423729,62.711864 L 50.423729,49.152542 V 16.101695"/>
    </svg>
    <svg className="x" version="1.1" height="100" width="100" viewBox="0 0 100 100">
      <path className="line" d="M 34,32 L 66,68" />
      <path className="line" d="M 66,32 L 34,68" />
    </svg>
  </div> */}


<div id="menu-icon-div" className={menu} onClick={changeMenuClass.bind()}>
            <svg id="menu-icon" viewBox="0 0 800 600">
                <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top">
                </path>
                <path d="M300,320 L540,320" id="middle"></path>
                <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                    id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
            </svg>
        </div>

</div>
         
          </nav>
          </div>


<div className="mobile-menu" style={{display:mobileMenu}}>
  <div className="mobile-menu-body">
  <ul>
              {/* <li><Link className={splitLocation[1] === "" ? "active" : ""} to="/" onClick={clickMenu.bind()} >Ana səhifə</Link></li> */}
              <li><a href="#about" onClick={clickMenu.bind()}>Ana Səhifə</a></li>
              <li><a href="#about" onClick={clickMenu.bind()}>Haqqımızda</a></li>
              <li><a href="#services" onClick={clickMenu.bind()}>Xidmətlər</a></li>
              <li><a href="#clients" onClick={clickMenu.bind()}>Partnyorlar</a></li>
              <li><a href="#contact" onClick={clickMenu.bind()}>Əlaqə</a></li>
              {/* <li><Link className={splitLocation[1] === "contact" ? "active" : ""} to="/contact" onClick={clickMenu.bind()}>Əlaqə</Link></li> */}
            </ul>

  </div>
</div>


  </header>
    )
}

export default Header;