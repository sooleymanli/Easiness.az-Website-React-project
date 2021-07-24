import React from 'react'

export default function TopBar() {
    return (
        <section id="topbar" className="d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:info@easiness.az">info@easiness.az</a></i>
            <i className="bi bi-phone d-flex align-items-center ms-4"><span><a href="tel:+994775990062">(077) 599 00 62</a></span></i>
          </div>
          <div className="social-links d-none d-md-flex align-items-center">
            <a href="/#" className="twitter"><i className="bi bi-twitter"></i></a>
            <a href="https://www.facebook.com/Easinesscom-106606841702310" target="_blank" rel="noreferrer" className="facebook"><i className="bi bi-facebook"></i></a>
            <a href="https://www.instagram.com/easinesscom" target="_blank" rel="noreferrer" className="instagram"><i className="bi bi-instagram"></i></a>
            <a href="/#" className="linkedin"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </section>
    
    )
}
