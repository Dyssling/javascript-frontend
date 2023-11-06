import React from 'react'
import '../assets/scss/components/Features.css'
import Feature from './Feature'
import Button from './Button'

const Features = () => {
  return (
    // <!-- Features sektion -->
        <section className="features-section">
            <div className="features-header">
                <div className="features-header-container">
                    <h6>
                        Features
                    </h6>
                    <h2>
                        Our Accounting is trusted by thousands of companies
                    </h2>
                    <Button className="features-button" type="yellow" text="Learn More" url="#" />
                </div>
            </div>
            {/* <!-- Grid sektion för features --> */}
            <div className="features-grid">
                <Feature icon="fa-regular fa-handshake" title="Business Advice" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
                <Feature icon="fa-regular fa-lightbulb-on" title="Startup Business" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
                <Feature icon="fa-regular fa-money-bill-trend-up" title="Financial Advice" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
                <Feature icon="fa-regular fa-triangle-exclamation" title="Risk Management" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
            </div>
        </section>
  )
}

export default Features