import React,{useEffect} from 'react'
// import Consulting from '../Img/features/consulting.svg'
// import Training from '../Img/features/training.svg'
// import Businessplan from '../Img/features/businessplan.svg'
// import Project from '../Img/features/Project.svg'
import './Featured.css'
import $ from 'jquery'
import AOS from "aos";
import "aos/dist/aos.css";




export default function Featured() {


    useEffect(()=>{

        $('.num').each(function () {
            $(this).prop('Counter',0).animate({
            Counter: $(this).text()
            }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
            $(this).text(Math.ceil(now));
            }
            });
            });
            
            AOS.init({
              duration : 2000
            })
          
    })
    return (
        <section id="featured" className="featured">
      <div className="container">
        <div className="row" >
          <div className="col-lg-3" data-aos="zoom-in" >
            <div className="icon-box text-center">
              {/* <img src={Consulting} alt="Konsultasiya" /> */}
              <span className="big"><span className="num">70</span>+</span>

              <h6>Konsaltinq</h6>
            </div>
          </div>
          <div className="col-lg-3 mt-4 mt-lg-0"  data-aos="zoom-in"  >
            <div className="icon-box text-center">
            {/* <img src={Training} alt="Təlim" /> */}
            <span className="big"><span className="num">40</span>+</span>

              <h6>Təlim</h6>

            </div>
          </div>
          <div className="col-lg-3 mt-4 mt-lg-0" data-aos="zoom-in" >
            <div className="icon-box text-center">
            {/* <img src={Businessplan} alt="Bizness Planı" /> */}
            <span className="big"><span className="num">10</span>+</span>
              <h6>Biznes plan</h6>
            </div>
          </div>
          <div className="col-lg-3 mt-4 mt-lg-0"  data-aos="zoom-in"  >
            <div className="icon-box text-center">
            {/* <img src={Project} alt="Layihə" /> */}
            <span className="big"><span className="num">30</span>+</span>

              <h6>Marketinq dəstəyi</h6>
            </div>
          </div>
        </div>

      </div>
    </section>
    )
}
