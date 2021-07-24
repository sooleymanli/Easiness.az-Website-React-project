import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import $ from 'jquery'
import './Contact.css'
import AOS from "aos";
import "aos/dist/aos.css";


export default function Contact() {


    const { register, handleSubmit} = useForm();
    const onSubmit  = (data, r) => {
       

            $(".loading").fadeIn(500);
        setTimeout(()=>{
            $(".loading").fadeOut(100);
            $(".sent-message").fadeIn(500)

        },2000)
        
       
        setTimeout(()=>{
            $(".sent-message").fadeOut(1000)
        },5000)
        const templateId = 'template_xzkrjec';
        const serviceID = 'service_4vcg1sq';
        sendFeedback(serviceID, templateId, { from_name: data.name, message_html: data.comment, reply_to: data.email, from_subject:data.subject })
        r.target.reset();
    }

    const sendFeedback = (serviceID, templateId, variables) => {
        window.emailjs.send(
            serviceID, templateId,
            variables
        ).then(res => {
     
        })
            .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
    }



    useEffect(()=>{

      AOS.init({
  duration : 1000
  })
  AOS.refresh();
  })


    return (
        <main id="main">
      
      
   
        <section id="contact" className="contact mt-5">
          <div className="container">
    
          <div className="row">
            <div className="col-12">
              <div className="section-title"><h2 className="text-center contact-caption">Əlaqə</h2></div>
          </div></div>
    
            <div className="row mt-2">
    
              <div className="col-lg-6" data-aos="fade-down" >
                <iframe className="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d1519.8169403157592!2d49.95405716201182!3d40.37264175302484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d40.3730055!2d49.9531479!5e0!3m2!1str!2s!4v1626891297377!5m2!1str!2s" frameBorder="0"  title="map" style={{border:0, width: "100%", height: "368px", boxShadow:"0 0 30px rgb(214 215 216 / 60%)"}} allowFullScreen></iframe>
              </div>
    
              <div className="col-lg-6" data-aos="fade-up" >
                <form onSubmit={handleSubmit(onSubmit)} className="php-email-form">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input type="text" name="name" className="form-control" id="name" placeholder="Ad" 
                    
                   {
                        ...register('name',{ 
                            required: "Adınızı daxil edin", 
                            maxLength: {
                                value: 20,
                                message: "Adınızın uzunluğu 20 simvoldan çox olmamalıdır"
                            } 
                        })
                    }  
                    />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input type="email" className="form-control" name="email" id="email" placeholder="Email" 
                       {...register('email',{
                            required: "Emailinizi daxil edin",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Email düzgün deyil"
                            }
                        })
                    } />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Mövzu"  
                    {...register('subject',{
                            required: "Mövzu daxil edin"
                        })
                    }  />
                  </div>
                  <div className="form-group mt-3">
                    <textarea className="form-control" name="comment" rows="5" placeholder="Mesaj"  {...register('comment',{
                            required: true
                        })
                    } ></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Göndərilir</div>
                   
                    {/* <div className="error-message">{errors.name && errors.name.message}</div> */}
                    <div className="sent-message"> Mesajınız göndərildi. Bizimlə əlaqə saxladığınız üçün təşəkkülər!</div>
                  </div>
                  <div className="text-center"><input type="submit"  value="Göndər"/></div>
                </form>
              </div>
    
            </div>
    
            <div className="row mt-5">
              <div className="col-lg-6" data-aos="fade-up">
                <div className="info-box mb-4">
                  <i className="bx bx-map"></i>
                  <h3>Ünvanımız:</h3>
                  <p>Əhməd Rəcəbli küçəsi 18a, Bakı,Azərbaycan</p>
                </div>
              </div>
    
              <div className="col-lg-3 col-md-6" data-aos="fade-up">
                <div className="info-box  mb-4">
                  <i className="bx bx-envelope"></i>
                  <h3>Email</h3>
                  <p>info@easiness.az</p>
                </div>
              </div>
    
              <div className="col-lg-3 col-md-6"  data-aos="fade-up">
                <div className="info-box  mb-4">
                  <i className="bx bx-phone-call"></i>
                  <h3>Telefon</h3>
                  <p>(077) 599 00 62</p>
                </div>
              </div>
    
            </div>
          </div>
        </section>
    
      </main>
    
    )
}
