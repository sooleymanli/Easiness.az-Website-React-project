import React from "react";
import './App.css';
import { Route } from 'react-router';
import TopBar from './Components/TopBar';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import About from './Components/About';
import Featured from './Components/Featured';
import Services from './Components/Services';
import Clients from './Components/Clients';
import Footer from './Components/Footer';
import BackToTop from './Components/BackToTop';
import Contact from './Components/Contact';
import Sales from './Components/Sales';
import Marketing from './Components/Marketing';
import './Components/Fonts.css'
import Advertising from './Components/Advertising';
import Project from './Components/Project';
import Business from './Components/Business';
import 'animate.css/source/animate.css'
// import NotPage from "./Components/NotPage";



function App() {



  return (
    <div className="App">
      
    <TopBar />

    <Route path="/" exact >
          <Header />
       <HeroSection />
<Featured />
<About />
<Services />
<Clients />
<Contact />
<Footer />
    </Route>
   
    <Route path="/sales"  >

      <Sales />
      <Services />
    </Route>
    <Route path="/marketing" >
  
      <Marketing />
      <Services />
    </Route>
    <Route path="/advertising"  >
      <Advertising />
      <Services />
    </Route>
    <Route path="/project"  >
      <Project />
      <Services />
    </Route>
    <Route path="/business"  >
      <Business />
      <Services />
    </Route>
    {/* <Switch>
    <Route path="*" component={NotPage} />
    </Switch> */}
    

<BackToTop />

    </div>
  );
}

export default App;
