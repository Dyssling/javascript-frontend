import React from 'react'
import Button from './Button'
import Cassandra from '../assets/images/Ellipse1.png'
import Amanda from '../assets/images/Ellipse2.png'
import Jack from '../assets/images/Ellipse3.png'
import '../assets/scss/components/Testimonial.css'
import TestimonialReview from './TestimonialReview'

const Testimonial = () => {
  return (
    // <!-- Testimonial sektion -->
        <section className="testimonial-section">
            <div className="testimonial-section-container">
                <h6>
                    Testimonial
                </h6>
                <h2>
                    What Our Client Says
                </h2>
                {/* <!-- Grid sektion för testimonials --> */}
                <div className="testimonial-grid">
                    <TestimonialReview imageSource={Cassandra} imageAlt="Cassandra" name="Cassandra Warren" occupation="Business Manager, Dorfus" text='"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"' />
                    <TestimonialReview imageSource={Amanda} imageAlt="Amanda" name="Amanda Tulling" occupation="Senior Developer, Square" text='"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"' />
                    <TestimonialReview imageSource={Jack} imageAlt="Jack" name="Jack McDogglas" occupation="Key Account Manager, Gobona" text='"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"' />
                </div>
                <Button className="testimonial-button" type="black" text="All Reviews" url="#" />
            </div>
        </section>
  )
}

export default Testimonial