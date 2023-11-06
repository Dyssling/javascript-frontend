import React from 'react'
import Image from '../assets/images/two-women.png'
import '../assets/scss/components/ChooseUs.css'
import ChooseUsFeature from './ChooseUsFeature'

const ChooseUs = () => {
  return (
    // <!-- "Choose us" sektion -->
    <section className="choose-us-section">
        <div className="box">{/* <!-- Den tomma lådan bakom bilden --> */}</div>
        <div className="choose-us-container">
            <div className="choose-us-header">
                <h6>
                    Why Choose Us
                </h6>
                <h2>
                    Why We Are The Best Business Consulting Agency
                </h2>
                {/* <!-- Grid sektion för "choose us" --> */}
                <div className="choose-us-grid">
                    <ChooseUsFeature icon="fa-light fa-thumbs-up" title="Process Excellence" text="Lorem, ipsum dolor sit amet consectetur." />
                    <ChooseUsFeature icon="fa-light fa-hexagon" title="Strategic Planning" text="Lorem, ipsum dolor sit amet consectetur." />
                    <ChooseUsFeature icon="fa-light fa-pen-nib" title="Experience Design" text="Lorem, ipsum dolor sit amet consectetur." />
                    <ChooseUsFeature icon="fa-light fa-head-side-gear" title="Artificial Intelligence" text="Lorem, ipsum dolor sit amet consectetur." />
                </div>
            </div>
        <img alt="two women chatting" src={Image} />
        </div>
    </section>
  )
}

export default ChooseUs