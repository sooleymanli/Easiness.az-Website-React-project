import React from 'react'
import Back from './Back'


export default function Marketing() {
    return (
        <main id="services" className="animate__animated animate__zoomInDown animate__slow p-3">
          <div className="container p-5 services-design  mt-3">
              <div className="row ">
                  <div className="col-12 ">
                  <div className="section-title">
          <h2 className="services-caption">Marketing Xidmətləri</h2>
      </div>
          <p className="services-paragraph">Hamının eşitməkdən yorulduğu və bir o qədər də qəliz qəbullanılan "Marketinq" anlayışını daha rahat, effektiv etmək üçün komandamızla biznesinizə müdaxilə edə bilərik. Yüksək məbləğlər xərcləmədən də marketinq alətlərinə sahib olmaq mümkündür.Satışın "qardaşı" sayılan marketinq həqiqətən də satış prosessinin aparılmasında 50% pay sahibi olur. Təklif etdiyiniz məhsulları, müştərilərin qarşısına vaxtında, etibarlı şəkildə çıxarmaq isə komandamızın işidir.</p>
      <ul className="list-unstyled" >
          <li><i className="bi bi-check-circle"></i> Marketinq strategiyasının qurulması və tətbiqi</li>
          <li><i className="bi bi-check-circle"></i> Brendinq və rebrendinq işlərinin təşkili</li>
          <li><i className="bi bi-check-circle"></i> Veb, mobil həllər, SMM</li>
          <li><i className="bi bi-check-circle"></i> Təbliğat və təşviqat işlərinin aparılması</li>
         
      </ul>
                  </div>
              </div>
          <Back />
          </div>
       
      </main>
    )
}
