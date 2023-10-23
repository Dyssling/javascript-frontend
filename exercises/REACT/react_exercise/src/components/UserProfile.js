import React from 'react'

const UserProfile = ({firstName, lastName, description}) => {
  return (
    <div>
        Namn: {firstName} {lastName} <br></br>
        Beskrivning: {description}
    </div>
  )
}

export default UserProfile