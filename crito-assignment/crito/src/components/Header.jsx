import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import Image from '../assets/images/Logo.svg'
import Button from './Button'
import '../assets/scss/components/Header.css'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
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
                <div className="nav"> {/* När skärmen är större än 768px syns denna nav, vilket bestäms av CSS filen med hjälp av media query */}
                    <nav>
                        <NavLink to="/">Home</NavLink>
                        <a href="#">Service</a>
                        <NavLink to="/news">News</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </nav>
                    <Button className="nav-button" type="yellow" text="Login" url="#"/>
                </div>
                {/* <!-- MOBIL Navigering --> */}
                {showMenu ? (
                                <div className="nav nav-mobile"> {/* När skärmen är större än 768px får denna nav display:none. Så även om showMenu == true så kommer elementet vara dolt på större skärmstorlekar tills man minskar storleken igen.*/}
                                    <nav>
                                        <NavLink to="/" onClick={() => {setShowMenu(!showMenu)}}>Home</NavLink> {/*När man klickar på en länk så döljs menyn igen */}
                                        <a href="#" onClick={() => {setShowMenu(!showMenu)}}>Service</a>
                                        <NavLink to="/news" onClick={() => {setShowMenu(!showMenu)}}>News</NavLink>
                                        <NavLink to="/contact" onClick={() => {setShowMenu(!showMenu)}}>Contact</NavLink>
                                    </nav>
                                    <Button className="nav-button" type="yellow" text="Login" url="#"/>
                                </div>
                            ) : (null)}
                {/* <!-- Mobil meny knapp --> */}
                <button onClick={() => {setShowMenu(!showMenu)}} className="menu">
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>
        </div>
    </header>
  )
}

export default Header