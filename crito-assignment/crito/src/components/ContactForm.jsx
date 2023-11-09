import React, {useState} from 'react'
import SubmitButton from './SubmitButton'
import '../assets/scss/components/ContactForm.css'
import { useFormik } from 'formik'

const ContactForm = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const sendForm = async (data) => { //Denna funktionen skickar formulärdatan till ett API
        data = JSON.stringify(data); //Datan görs om till en json sträng
        
        data = await fetch("https://win23-assignment.azurewebsites.net/api/contactform", { //Jag skickar med ett objekt, där jag gör olika inställningar på fetch metoden
            method: "POST", //Jag vill göra en POST, istället för GET (som är default)
            headers: {"Content-Type": "application/json"}, //Jag sätter ett headers objekt som berättar vad för typ av innehåll jag skickar i funktionen
            body: data //Bodyn, eller innehållet, som jag vill skicka är data objektet i detta fallet
        });

        if (data.status != 200){ // Om jag får en annan status än 200 så skapas ett error message
            setSuccessMessage(null);
            setErrorMessage(`Error: Status code ${data.status}`);
        }

        else{ //Annars skapas ett success message. Sedan återställs även formuläret
            setErrorMessage(null);
            setSuccessMessage(`Thank you for your message, we will get back to you shortly!`);
            formik.resetForm();
        }
    }

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: ""
        },

        onSubmit: () => {  //Logical NOT operator används i IF satserna, som alltså returnerar true om värdet är false, och kör därmed IF satsen.
            if (!(/^[a-zA-Z ]{2,}$/.test(formik.values.name))) { //Regex som inte tillåter siffror eller namn som är kortare än en bokstav
                setSuccessMessage(null);
                setErrorMessage("Please enter a valid name.");
            }

            else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formik.values.email))){ //Regex som kollar om e-postadressen uppfyller kravet för a@a.aa, och tillåter inte olämpliga specialtecken
                setSuccessMessage(null);
                setErrorMessage("Please enter a valid email address.");
            }

            else if (!formik.values.message){ //Om meddelandet är tomt (false) så körs denna IF sats
                setSuccessMessage(null);
                setErrorMessage("Please enter a message.");
            }

            else{ //Om formuläret är godkänt så körs funktionen där objektet "formik.values" skickas till ett API
                sendForm(formik.values);
            }

        }
    });
  return (
    // <!-- Contact sektion -->
        <section className="contact">
            <div className="contact-container">
                <h2>
                    Leave us a message for any information.
                </h2>
                <form onSubmit={formik.handleSubmit} noValidate>
                    <input type="text" name="name" title="Name" placeholder="Name*" value={formik.values.name} onChange={formik.handleChange} />
                    <input type="email" name="email" title="Email" placeholder="Email*" value={formik.values.email} onChange={formik.handleChange} />
                    <textarea name="message" title="Your message" placeholder="Your Message*" value={formik.values.message} onChange={formik.handleChange} />
                    {errorMessage ? ( //Conditional rendering. Om det finns ett error meddelande så renderas det ut, annars renderas bara null, alltså ingenting
                            <div className="error-message">
                                <i className="fa-solid fa-triangle-exclamation"></i> {errorMessage}
                            </div>
                    ) : (null)}
                    {successMessage ? ( //Samma sak här, fast med success meddelandet
                            <div className="error-message success-message">
                                <i className="fa-sharp fa-solid fa-check"></i> {successMessage}
                            </div>
                    ) : (null)}

                    <SubmitButton className="contact-button" text="Send Message" />
                </form>
            </div>
        </section>
  )
}

export default ContactForm