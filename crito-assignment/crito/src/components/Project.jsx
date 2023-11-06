import React from 'react'
import '../assets/scss/components/Project.css'

const Project = ({imageSource, imageAlt, title}) => {
  return (
    <div className="projects-grid-container">
        <img alt={imageAlt} src={imageSource} />
        <h4>
            {title}
        </h4>
        <div>
            <a href="#">Read More <i className="fa-solid fa-arrow-up-right"></i></a>
        </div>
    </div>
  )
}

export default Project