import React from 'react'
import '../assets/scss/components/TestimonialReview.css'

const TestimonialReview = ({text, imageSource, imageAlt, name, occupation}) => {
  return (
    <div className="testimonial-grid-container">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <p>
            {text}
        </p>
        <div className="name">
            <img src={imageSource} alt={imageAlt} />
            <div>
                <h4>
                    {name}
                </h4>
                <p>
                    {occupation}
                </p>
            </div>
        </div>
    </div>
  )
}

export default TestimonialReview