import React from 'react'
import Button from './Button'
import '../assets/scss/components/Showcase.css'
import Element from '../assets/images/Element.svg'
import Image from '../assets/images/Image.png'

const Showcase = () => {
  return (
    // <!-- Showcase sektion -->
        <section className="showcase-section">
            <img className="element" alt="white decorative lines" src={Element} />
            <div className="showcase-container">
                <div className="showcase">
                    <h1>
                        We Provide The Best Business Solutions
                    </h1>
                    <p>
                        Establish your vision and value proposition and turn them into testable prototypes.
                    </p>
                    <div className="showcase-buttons-section">
                        <Button type="yellow" text="Get Consulting" url="#" />
                        <Button type="transparent" text="Learn More" url="#" />
                    </div>
                </div>
                <img src={Image} alt="Man looking at tablet" />
            </div>
        </section>
  )
}

export default Showcase