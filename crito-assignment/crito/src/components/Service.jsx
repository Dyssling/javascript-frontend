import React from 'react'
import '../assets/scss/components/Service.css'

const Service = ({className, title, text}) => {
  return (
    <div className={`services-grid-container${className ? (" " + className) : ("")}`}>
        <h4>
            {title}
        </h4>
        <p>
            {text}
        </p>
        <div>
            <a href="#"><i className="fa-light fa-arrow-right"></i></a>
        </div>
    </div>
  )
}

export default Service