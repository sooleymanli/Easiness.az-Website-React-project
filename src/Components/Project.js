import React from 'react'
import Back from './Back'


export default function Project() {
    return (
        <main id="services" className="animate__animated animate__zoomInDown animate__slow p-3">
        <div className="container p-5 services-design  mt-3">
            <div className="row">
                <div className="col-12">
                <div className="section-title">
          <h2 className="services-caption">Layihələrin tərtibatı</h2>
      </div>
               
        <p className="services-paragraph">Razılaşmaq olar ki, hər biznesin qurulması riskdir. Kortəbii yanaşma ilə verilən qərar nəticəsində qurulan bizneslərin isə risk faktorları daha böyükdür. Bazar araşdırması, maliyyə planı, uzun və qısamüddətli plan, işin icra xəritəsi, bazarın dövriyyəsinin ölçülməsi kimi bir çox nüans nəzərə alınmadıqda isə qurulan biznes özlüyündə potensialdan çox risk daşıyır. Planlı yaşayan insanlar uğurlu olduğu kimi planlı qurulan bizneslər də uğurlu olur. Komandamızla birlikdə investorlar üçün biznes layihələrinə aid olan aşağıdakı xidmətləri sizə göstərə bilərik.</p>
    <ul className="list-unstyled" >
        <li><i className="bi bi-check-circle"></i> Biznes layihələrinin hazırlanması </li>
        <li><i className="bi bi-check-circle"></i> Bazar payının qaldırılması üçün strateji planlama</li>
        <li><i className="bi bi-check-circle"></i> Bazarda biznes boşluqlarının tapılması</li>
        <li><i className="bi bi-check-circle"></i> İnkişaf xəttinə uyğun layihələrin hazırlanması</li>
        <li><i className="bi bi-check-circle"></i> Hazır biznes layihələrinin təhlili</li>
        <li><i className="bi bi-check-circle"></i> Qurulacaq biznes üçün arayışların tətbiq olunması</li>
       
    </ul>
                </div>
            </div>
            <Back />
        </div>

    </main>
    )
}
