import React from 'react'
import { NavLink } from 'react-router-dom'
import Image from '../assets/images/Logo.svg'
import Button from './Button'
import '../assets/scss/components/Header.css'

const Header = () => {
  return (
    <header>
        <div className="header-container">
            <img alt="logo" src={Image} />
            <div className="header">
                {/* <!-- Kontaktinformation och sociala medier --> */}
                <div className="contact">
                    <div className="info">
                        <i className="fa-regular fa-phone"></i>
                        +46 (8) 121 470 50
                    </div>
                    <div className="info">
                        <i className="fa-regular fa-envelope"></i>
                        info@crito.com
                    </div>
                    <div className="info location-social">
                        <div className="location">
                            <i className="fa-sharp fa-regular fa-location-dot"></i>
                            Sveavägen 31, 111 34 STOCKHOLM
                        </div>
                        <div className="social">
                            <div className="social-icons"> {/*Lägger ikonerna i sina egna divs, p.g.a att de beter sig lite udda i React. Så detta löste problemet */}
                                <a href="https://facebook.com"> <i className="fa-brands fa-facebook"></i></a>
                            </div>
                            <div className="social-icons">
                                <a href="https://twitter.com"> <i className="fa-brands fa-x-twitter"></i></a>
                            </div>
                            <div className="social-icons">
                                <a href="https://instagram.com"> <i className="fa-brands fa-instagram"></i></a>
                            </div>
                            <div className="social-icons">
                                <a href="https://linkedin.com"> <i className="fa-brands fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Navigering --> */}
                <div id="nav" className="nav">
                    <nav>
                        <NavLink to="/">Home</NavLink>
                        <a href="#">Service</a>
                        <NavLink to="/news">News</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </nav>
                    <Button className="nav-button" type="yellow" text="Login" url="#"/>
                </div>
                {/* <!-- Mobil meny knapp --> */}
                <button className="menu">
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>
        </div>
    </header>
  )
}

export default Header