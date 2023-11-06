import React from 'react'
import Woman from '../assets/images/woman.png'
import EWlement from '../assets/images/EWlement.svg'
import Button from './Button'
import '../assets/scss/components/About.css'

const About = () => {
  return (
    // <!-- About sektion -->
        <section className="about-section">
            <div className="woman-container">
                <img className="woman" alt="woman" src={Woman} />
                <img className="element" alt="decorative lines" src={EWlement} />
                <div className="founder">
                    <h4>
                        Samantha Brown, <span>Founder</span>
                    </h4>
                    <p>
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    </p>
                </div>
            </div>
            <div className="about-container">
                <h6>
                    About Company
                </h6>
                <h2>
                    We Are Business Consulting & Credit Repair Experts
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos. <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.
                </p>
                <div className="about-buttons">
                    <Button className="about-button" type="black" text="Learn More" url="#" />
                    <button type="button"><i className="fa-solid fa-play"></i></button>
                    <p>Intro Video</p>
                </div>
            </div>
        </section>
  )
}

export default About