import React from 'react'
import '../assets/scss/components/ChooseUsFeature.css'

const ChooseUsFeature = ({icon, title, text}) => {
  return (
    <div className="choose-us-header-container">
        <div className="icon">
            <i className={icon}></i>
        </div>
        <div className="text">
            <h4>
                {title}
            </h4>
            <p>
                {text}
            </p>
        </div>
    </div>
  )
}

export default ChooseUsFeature