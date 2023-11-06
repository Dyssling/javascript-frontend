import React from 'react'
import Kristine from '../assets/images/Kristine.png'
import Mark from '../assets/images/Mark.png'
import Kimberly from '../assets/images/Kimberly.png'
import Justin from '../assets/images/Justin.png'
import '../assets/scss/components/Team.css'
import Button from './Button'
import TeamMember from './TeamMember'

const Team = () => {
  return (
    // <!-- Team sektion -->
        <section className="team-section">
            <div className="team-section-container">
                <div className="team-header">
                    <div className="team-header-container">
                        <h6>
                            Meet Our Team
                        </h6>
                        <h2>
                            Experience Team Members
                        </h2>
                    </div>
                    <Button className="team-button" type="transparent" text="Browse Team" url="#" />
                </div>
                {/* <!-- Grid sektion för team --> */}
                <div className="team-grid">
                    <TeamMember imageAlt="Kristine" imageSource={Kristine} name="Kristine Palmer" text="Chief Operation Officer" />
                    <TeamMember imageAlt="Mark" imageSource={Mark} name="Mark Aubri" text="Senior Consultant" />
                    <TeamMember imageAlt="Kimberly" imageSource={Kimberly} name="Mark Aubri" text="Senior Consultant" />
                    <TeamMember imageAlt="Justin" imageSource={Justin} name="Justin Willoman" text="Senior Tech Consultant" />
                </div>
                {/* <!-- Karusell prickar eller vad det heter --> */}
                <div className="dot-container">
                    <button></button>
                    <button className="here"></button>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
            </div>
        </section>
  )
}

export default Team