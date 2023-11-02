import React from 'react'
import FooterElement from '../assets/images/FooterElement.svg'
import FooterLogo from '../assets/images/FooterLogo.svg'
import '../assets/scss/components/Footer.css'

const Footer = () => {
  return (
    // <!-- Footer sektion -->
    <footer>
        {/* <!-- Övre delen av footern --> */}
        <div className="footer-nav-section">
            <img className="footer-element" src={FooterElement} alt="Decorative lines"/>
            <div className="footer-nav">
                <div className="footer-about">
                    <img src={FooterLogo} alt="Logo"/>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.
                    </p>
                </div>
                {/* <!-- Navigering som även blir till ett grid i mobil-varianten --> */}
                <nav>
                    <div>
                        <h4>Company</h4>
                        <a href="#">About</a>
                        <a href="#">Features</a>
                        <a href="#">Works</a>
                        <a href="#">Career</a>
                    </div>
                    <div>
                        <h4>Help</h4>
                        <a href="#">Customer Support</a>
                        <a href="#">Delivery Details</a>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                    <div>
                        <h4>Resources</h4>
                        <a href="#">Free eBooks</a>
                        <a href="#">Development Tutorial</a>
                        <a href="#">How To - Blog</a>
                        <a href="#">Youtube Playlist</a>
                    </div>
                    <div>
                        <h4>Links</h4>
                        <a href="#">Free eBooks</a>
                        <a href="#">Development Tutorial</a>
                        <a href="#">How To - Blog</a>
                        <a href="#">Youtube Playlist</a>
                    </div>
                </nav>
            </div>
        </div>
        {/* <!-- Nedre delen av footern --> */}
        <div className="footer-bottom">
            <div className="footer-bottom-container">
                {/* <!-- Knappar till sociala medier som bara visas på mobil-varianten. Jag ville ändra ordningen i flödet, så därför kommer dessa knappar två gånger. --> */}
                <div className="social mobile">
                    <div className="social-icons">
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
                <p>
                    © 2023 Crito - Consulting Company Inc. All Rights Reserved.
                </p>
                {/* <!-- Knapparna igen --> */}
                <div className="social">
                    <div className="social-icons">
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
    </footer>
  )
}

export default Footer