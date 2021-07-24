import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
// import { useLocation } from "react-router-dom";



function Footer() {
    // const locations = useLocation();
    // const { pathname } = locations;
    // const splitLocations = pathname.split("/");






    return (

        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Səhifələr</h4>
                            <ul>
                                {/* <li><i className="bx bx-chevron-right"></i><Link className={splitLocations[1] === "" ? "active" : ""} to="/">Ana səhifə</Link></li> */}
                                <li><i className="bx bx-chevron-right"></i> <a href="/#">Ana səhifə</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#about">Haqqımızda</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#services">Xidmətlər</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#clients">Partnyorlar</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#contact">Əlaqə</a></li>
                                {/* <li><i className="bx bx-chevron-right"></i> <Link  className={splitLocations[1] === "contact" ? "active" : ""} to="/contact">Əlaqə</Link></li> */}
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links" >
                            <h4>Xidmətlərimiz</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/sales">Satış Xidmətləri</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/marketing">Marketinq Xidmətləri</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/advertising">Reklam Xidmətəri</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/project">Layihələrin Tərtibatı</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/business">Biznes Məsləhətləri</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-contact" >
                            <h4>Əlaqə</h4>
                            <p>

                                Əhməd Rəcəbli küçəsi <br></br>
                                18a, Bakı<br></br>
                                Azərbaycan <br></br>
                                <br></br>
                                <strong>Telefon:</strong> (077) 599 00 62
                                <br></br>
                                <strong>Email:</strong> info@easiness.az <br></br> </p>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-info">
                            <h3>Haqqımızda</h3>
                            <p>Biz "Easiness Company" olaraq istənilən tip biznes formalarını inkişaf etdiririk. Yeni yaranmağımıza baxmayaraq, satış, marketinq, idarəetmə və digər sahələrdə peşəkar, bacarıqlı, təcrübəli işçi heyətinə sahibik.</p>
                            <div className="social-links mt-3">
                                <a href="/#" className="twitter"><i className="bx bxl-twitter"></i></a>
                                <a href="https://www.facebook.com/Easinesscom-106606841702310" target="_blank" rel="noreferrer" className="facebook"><i className="bx bxl-facebook"></i></a>
                                <a href="https://www.instagram.com/easinesscom/" target="_blank" rel="noreferrer" className="instagram"><i className="bx bxl-instagram"></i></a>
                                <a href="/#" className="google-plus"><i className="bx bxl-skype"></i></a>
                                <a href="/#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container" >
                <div className="copyright">
                    &copy; Copyright <strong><span>Easiness</span></strong>. All Rights Reserved
                </div>
                <div className="credits">

                    Developed by <a href="https://github.com/sooleymanli" target="_blank" rel="noreferrer">Fuad Süleymanlı</a>
                </div>
            </div>
        </footer>

    )
}

export default Footer;