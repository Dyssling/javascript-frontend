import React from 'react'
import '../assets/scss/components/ContactInfo.css'

const ContactInfo = () => {
  return (
    // <!-- Info sektion -->
        <section className="info">
            {/* <!-- Grid sektion för info --> */}
            <div className="info-grid">
                <div className="info-grid-container">
                    <i className="fa-solid fa-location-dot"></i>
                    <div className="info-container">
                        <h4>
                            Visit us
                        </h4>
                        <p>
                            Sveavägen 31
                        </p>
                        <p>
                            111 34 STOCKHOLM
                        </p>
                    </div>
                </div>
                <div className="info-grid-container">
                    <i className="fa-solid fa-phone"></i>
                    <div className="info-container">
                        <h4>
                            Call us
                        </h4>
                        <p>
                            +46 (8) 121 470 50
                        </p>
                        <p>
                            +46 (8) 121 470 51
                        </p>
                    </div>
                </div>
                <div className="info-grid-container">
                    <i className="fa-solid fa-envelope"></i>
                    <div className="info-container">
                        <h4>
                            Email us
                        </h4>
                        <p>
                            info@crito.com
                        </p>
                        <p>
                            support@crito.com
                        </p>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default ContactInfo