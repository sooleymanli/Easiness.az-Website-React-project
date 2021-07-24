import React from 'react'
import Back from './Back'


export default function Sales() {
    return (
      <main id="services" className="animate__animated animate__zoomInDown animate__slow p-3" >
          <div className="container p-5 services-design  mt-3">
              <div className="row">
                  <div className="col-12">
                  <div className="section-title">
          <h2 className="services-caption">Satış Xidmətləri</h2>
      </div>
          <p className="services-paragraph ">İstənilən tip biznesdə satışın artırılması üçün xüsusi alətlərdən istifadə edilir. Dövriyyənin artması şirkətin daha çox qazanmasına, şirkətin daha çox qazanması şirkətin inkişafına, şirkətin inkişafı müəyyən vaxtdan sonra bazarın lideri olmasına gətirib çıxardır. Biz, peşəkarlardan təşkil olunmuş komandamızla bu yolda irəliləməkdə sizin üçün "kompas" xarakteri daşıyaraq həmişə yanınızda oluruq.</p>
      <ul className="list-unstyled" >
          <li><i className="bi bi-check-circle"></i> Satış strategiyasının hazırlanması</li>
          <li><i className="bi bi-check-circle"></i> Qısa və uzunmüddətli satış proqnozlarının verilməsi</li>
          <li><i className="bi bi-check-circle"></i> CRM-in qurulması və müştəri əlaqələrinin inkişafı</li>
          <li><i className="bi bi-check-circle"></i> B2B, B2C satış konseptual xəttinin yaradılması</li>
          <li><i className="bi bi-check-circle"></i> Satış və idarəetmə təlimlərinin təşkili</li>
      </ul>
                  </div>
              </div>
              <Back />
          </div>
    
      </main>
    )
}
