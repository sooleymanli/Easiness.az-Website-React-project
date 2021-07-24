import React, { useEffect } from 'react'
import './Clients.css'
import Dost from '../Img/clients/easiness/dost.png'
import Yukk from '../Img/clients/easiness/yuk.svg'
import Emek from '../Img/clients/easiness/emek.png'
import Goktas from '../Img/clients/easiness/goktas.png'
import Kontakt from '../Img/clients/easiness/kontakt.png'
import Tuktuk from '../Img/clients/easiness/tuktuk.png'
import Evcil from '../Img/clients/easiness/evcil.jpg'
import Gumus from '../Img/clients/easiness/gumus.jpg'
import Nar from '../Img/clients/easiness/nar.jpg'
import Kadrlar from '../Img/clients/easiness/kadrlar.jpg'

import AOS from "aos";
import "aos/dist/aos.css";

export default function Clients() {
    useEffect(()=>{

        AOS.init({
    duration : 1000
    })
    AOS.refresh();
    })
    
    return (

        <section id="clients" className="clients ">
            <div className="container mt-4 mb-5">
                <div className="section-title">
                    <h2>Partnyorlar</h2>
                </div>
                <div className="clients-slider swipe-container mt-1  mb-5">
                    <div className="clients-body">
                        <div data-aos="fade-down"><img src={Dost} className="clients-img" alt="Dost Agentliyi" /></div>
                        <div data-aos="fade-up"><img src={Yukk} className="clients-img" alt="Yuk daşıma" /></div>
                        <div data-aos="fade-down"><img src={Emek} className="clients-img" alt="Əmək və Əhalinin Sosial Müdafiəsi Nazirliyi" /></div>
                        <div data-aos="fade-up"><img src={Goktas} className="clients-img" alt="Göktaş" /></div>
                        <div data-aos="fade-down"><img src={Kontakt} className="clients-img" alt="Kontakt Home" /></div>
                        <div data-aos="fade-up"><img src={Tuktuk} className="clients-img" alt="Tuk Tuk" /></div>
                        <div data-aos="fade-down"><img src={Evcil} className="clients-img" alt="Evcil Mobilya" /></div>
                        <div data-aos="fade-up"><img src={Gumus} className="clients-img" alt="Tuk Tuk" /></div>
                        <div data-aos="fade-down"><img src={Nar} className="clients-img" alt="Evcil Mobilya" /></div>
                        <div data-aos="fade-up"><img src={Kadrlar} className="clients-img" alt="Tuk Tuk" /></div>

                    </div>

                </div>
            </div>
        </section>

    )
}
