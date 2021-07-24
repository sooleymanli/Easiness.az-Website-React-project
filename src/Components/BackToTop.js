import React,{useEffect,useState} from 'react'
import './BackToTop.css'

export default function BackToTop() {

const [backToTop,setBackToTop] = useState("back-to-top d-flex align-items-center justify-content-center")
    
useEffect(() => {
        window.addEventListener('scroll', (e)=>{
           if(window.scrollY>=300){
            setBackToTop("back-to-top d-flex align-items-center justify-content-center active")
           }else{
            setBackToTop("back-to-top d-flex align-items-center justify-content-center")
           }
         
        });

    }, [])
    return (
        <a href="#body" className={backToTop}><i className="bi bi-arrow-up-short"></i></a>

    )
}
