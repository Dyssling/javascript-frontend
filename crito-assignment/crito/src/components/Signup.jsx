import React from 'react'
import SubmitButton from './SubmitButton'
import LightElement from '../assets/images/LightElement.svg'
import '../assets/scss/components/Signup.css'

const Signup = () => {
  return (
    // <!-- Signup sektion -->
        <section className="signup-section">
            <img src={LightElement} alt="Decorative lines" />
            <div className="signup-section-container">
                <h2>
                    Get News Updates By Signup
                </h2>
                {/* <!-- Formulär som inte gör så mycket, men ser bra ut --> */}
                <form>
                    <input type="email" name="email" title="Email" placeholder="username@domain.com" />
                    <SubmitButton className="signup-button" text="Subscribe" />
                </form>
            </div>
        </section>
  )
}

export default Signup