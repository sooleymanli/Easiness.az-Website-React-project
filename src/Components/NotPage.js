import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import './NotPage.css'

export default function NotPage() {
    useEffect(() => {
       
    })
    return (
      <div className="container">
          <div className="row mt-5">
              <div className="col-12">
                  <h2 className="text-center error">404</h2>
                  <p className="text-center erros-paragraph">Bu səhifə mövcud deyil..</p>
                  <p className="text-center erros-paragraph"><Link to="/" exact >Ana Səhifəyə</Link> qayıdın..</p>
              </div>
          </div>
      </div>
    )
}
