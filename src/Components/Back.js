import React from 'react'
import { Link } from 'react-router-dom'

export default function Back() {
    return (
        <div className="row">
                        <div className="col-12 mb-5 text-end"><Link to="/" exact ><h5 className="back-button"><i class="fas fa-arrow-left" style={{marginRight:"10px"}}></i>  Ana Səhifə</h5></Link></div>
        </div>
      
    )
}
