import React from 'react'
import '../assets/scss/components/TeamMember.css'

const TeamMember = ({imageAlt, imageSource, name, text}) => {
  return (
    <div className="team-grid-container">
    <img alt={imageAlt} src={imageSource} />
    <h4>
        {name}
    </h4>
    <p>
        {text}
    </p>
</div>
  )
}

export default TeamMember