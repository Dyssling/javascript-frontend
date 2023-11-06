import React from 'react'
import Element from '../assets/images/Rectangle607.svg'
import '../assets/scss/components/Services.css'
import Button from './Button'
import Service from './Service'

const Services = () => {
  return (
    // <!-- Services sektion -->
        <section className="services-section">
            <img className="element" alt="decorative lines" src={Element} />
            <div className="services-container">
                <h6>
                    Our Services
                </h6>
                <h2>
                    We Provide The Best Service For Consulting
                </h2>
                {/* <!-- Grid sektion för services --> */}
                <div className="services-grid">
                    <Service title="Business Advice" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." />
                    <Service className="startup" title="Startup Business" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." />
                    <Service title="Financial Advice" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." />
                    <Service title="Risk Management" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." />
                </div>
                <Button className="services-button" type="transparent" text="Browse Services" url="#" />
            </div>
        </section>
  )
}

export default Services