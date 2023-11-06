import React from 'react'
import '../assets/scss/components/Feature.css'

const Feature = ({icon, title, text}) => {
  return (
    <div className="features-grid-container">
        <i className={icon}></i>
        <h3>
            {title}
        </h3>
        <p>
            {text}
        </p>
    </div>
  )
}

export default Feature