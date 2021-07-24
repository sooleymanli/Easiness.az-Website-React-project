import React, { useEffect } from 'react'
import './Services.css'
import { Link } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";


export default function Services() {

  useEffect(() => {

    AOS.init({
      duration: 1000
    })
    AOS.refresh();
  })



  return (
    <section id="services" className="services">
      <div className="container mt-5">
        <div className="row ">
          <div className="col-12" >
            <div className="section-title">
              <h2 className="services-caption">Xidmətlərimiz</h2>
            </div>   </div>
        </div>
        <div className="row mt-4" >

          <Link to="/sales" className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up">
            <div className="icon-box">
              <div className="icon"><i className="fas fa-shopping-cart"></i></div>
              <h4>Satış Xidmətləri</h4>
              <p>İstənilən tip biznesdə satışın artırılması üçün xüsusi alətlərdən istifadə edilir..</p>
            </div>
          </Link>


          <Link to="/marketing" className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="fade-up">
            <div className="icon-box">
              <div className="icon"><i className="fas fa-funnel-dollar"></i></div>
              <h4>Marketinq Xidmətləri</h4>
              <p>Yüksək məbləğlər xərcləmədən də marketinq alətlərinə sahib olmaq mümkündür..</p>
            </div>
          </Link>

          <Link to="/advertising" className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="fade-up">
            <div className="icon-box">
              <div className="icon"><i className="fab fa-adversal"></i></div>
              <h4>Reklam Xidmətləri</h4>
              <p>Düzgün aparılan reklam, həmin reklama ayrılan büdcədən düşündüyünüzdən də çox gəlir gətirir..</p>
            </div>
          </Link>

          <Link to="/project" className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up">
            <div className="icon-box">
              <div className="icon"><i className="fas fa-folder"></i></div>
              <h4>Layihələrin Tərtibatı</h4>
              <p>Planlı yaşayan insanlar uğurlu olduğu kimi planlı qurulan bizneslər də uğurlu olur..</p>
            </div>
          </Link>

          <Link to="/business" className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up">
            <div className="icon-box">
              <div className="icon"><i className="fas fa-business-time"></i></div>
              <h4>Biznes Məsləhətləri</h4>
              <p>Komandamız  sizin biznesiniz üçün axtardığınız "müəllim" olacaq..</p>
            </div>
          </Link>



        </div>

      </div>
    </section>
  )
}
