import React,{useEffect} from 'react'
// import AboutPhoto from '../Img/about.jpg'
import './About.css'
import AOS from "aos";
import "aos/dist/aos.css";




function About() {


  useEffect(()=>{

                 AOS.init({
          duration : 1000
        })
        AOS.refresh();
})

    return (
        <section id="about" className="about" data-aos="fade-up">
        <div className="container mt-4">
  <div className="row ">
      <div className="col-12">
      <div className="section-title">
        <h2 className="about-caption">Haqqımızda</h2>
      </div>
      </div>
  </div>
          <div className="row mt-4 d-flex justify-content-center align-items-center">
            {/* <div className="col-lg-6">
              <img src={AboutPhoto} className="img-fluid" alt="" />
            </div> */}
            <div className="col-lg-12 pt-4 pt-lg-0 content">
              <p>
              Biz "Easiness Company" olaraq istənilən tip biznes formalarını inkişaf etdiririk. Yeni yaranmağımıza baxmayaraq, satış, marketinq, idarəetmə və digər sahələrdə peşəkar, bacarıqlı, təcrübəli işçi heyətinə sahibik.
              </p>
              <p>İşlərimizin yüksək səviyyədə olması üçün bütün heyətimiz geniş idarəçilik imkanlarına sahibdir.</p>
              <p>Əməkdaşlıq etdiyimiz şirkətlərin əsas maliyyə və iqtisadi mərkəzlərindəki gücü bizim üçün uğurun əsas devizidir.</p>
              <p>Müştərilərimizin məmnuniyyəti bizim üçün mühüm amildir. Buna görə də biz öz fəaliyyətimizdə və xidmətimizdə hər zaman keyfiyyəti əsas tutaraq fəaliyyət göstəririk. Bu fəaliyyətə əsasən aşağıdakı xidmətlər daxildir:</p>
                            <ul>
                <li>    <i className="bi bi-check-circle"></i> İnvestorlar üçün effektiv biznes layihələrinin hazırlanması</li>
                <li>    <i className="bi bi-check-circle"></i> Biznesin inkişafı üçün bütün alətlərin tətbiqi
</li>
                <li>    <i className="bi bi-check-circle"></i> Yüksək səviyyəli müştəri xidmətlərini təklif edən uzunmüddətli münasibət</li>
              </ul>
              <p>
              Biz bu sahədə dünya təcrübəsini əsas tutaraq yüksək keyfiyyətli fəaliyyətlə müştərilərimizin problemlemlərinin düzgün və kifayət qədər operativ şəkildə həllinə çalışırıq.
              </p>
            </div>
          </div>
  
        </div>
      </section>
    )
}

export default About;