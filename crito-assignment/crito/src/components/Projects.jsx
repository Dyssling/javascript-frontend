import React from 'react'
import Project1 from '../assets/images/project1.png'
import Project2 from '../assets/images/project2.png'
import Project3 from '../assets/images/project3.png'
import Project4 from '../assets/images/project4.png'
import '../assets/scss/components/Projects.css'
import Button from './Button'
import Project from './Project'

const Projects = () => {
  return (
    // <!-- Projects sektion -->
        <section className="projects-section">
            <div className="projects-section-container">
                <h6>
                    Project & Case Studies
                </h6>
                <h2>
                    Let's Look At Our Global Projects
                </h2>
                {/* <!-- Grid sektion för projects --> */}
                <div className="projects-grid">
                    <Project imageAlt="Person reading a business paper" imageSource={Project1} title="Grow your business" />
                    <Project imageAlt="iPad" imageSource={Project2} title="Why your client needs a responsive website" />
                    <Project imageAlt="Notebook" imageSource={Project3} title="Educate your employees to get better results" />
                    <Project imageAlt="Laptop" imageSource={Project4} title="Business Insights is an important piece of your business" />
                </div>
                <Button className="projects-button" type="black" text="All Recent Projects" url="#" />
            </div>
        </section>
  )
}

export default Projects