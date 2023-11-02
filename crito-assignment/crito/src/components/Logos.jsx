import React from 'react'
import '../assets/scss/components/Logos.css'
import Paperz from '../assets/images/Paperz.svg'
import Dorfus from '../assets/images/Dorfus.svg'
import Martino from '../assets/images/Martino.svg'
import Square from '../assets/images/Square.svg'
import Gobona from '../assets/images/Gobona.svg'

const Logos = () => {
  return (
    // <!-- Logo sektion -->
    <section className="logo-section">
        <div className="logo-container">
            <img src={Paperz} alt="Paperz logo" />
            <img src={Dorfus} alt="Dorfus logo" />
            <img src={Martino} alt="Martino logo" />
            <img src={Square} alt="Square logo" />
            <img src={Gobona}alt="Gobona logo" />
        </div>
    </section>
  )
}

export default Logos