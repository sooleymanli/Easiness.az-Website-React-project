import React from 'react'
import Back from './Back'

export default function Business() {
    return (
        <main id="services"  className="animate__animated animate__zoomInDown animate__slow p-3">
        <div className="container p-5 services-design  mt-3">
            <div className="row">
                <div className="col-12">
                <div className="section-title">
          <h2 className="services-caption">Biznes məsləhətləri</h2>
      </div>
            
        <p className="services-paragraph">Biznes məsləhətləri
Sahibkarların işinin qaydasında getməməsinin səbəbini araşdırıb tapmaması normaldır. Hər sahibkar öz biznesinə "övladı" kimi yanaşdığı üçün səhvləri görə bilmir. Biznesdə olan hər bir səhv inkişaf dinamikasına təsir edir. Nəzərə alsaq ki, biznes də müasir dünyada hər şey kimi daha sürətlə inkişaf edir bu səhvlər şirkətin bazar payını itirməsinə, digər eyni kommersiya fəaliyyəti ilə məşğul olan şirkətlərin qalxmasına və şirkətin çöküşünə gətirib çıxara bilər. Necə ki, valideyn öz övladının daha yüksəkdə olması üçün peşəkar müəllimlərdən istifadə edir, komandamız da sizin biznesinizin üçün axtardığınız "müəllim" olacaq.</p>
    <ul className="list-unstyled" >
        <li><i className="bi bi-check-circle"></i> Hazır bizneslərin analitikası və zəif tərəflərin aşkarlanması</li>
        <li><i className="bi bi-check-circle"></i> Bazar payının qaldırılması üçün strateji planlama</li>
        <li><i className="bi bi-check-circle"></i> Sistemin avtomatlaşdırılması</li>
        <li><i className="bi bi-check-circle"></i> KPI qurulması</li>
       
    </ul>
                </div>
            </div>
            <Back />
        </div>
 
    </main>
    )
}
