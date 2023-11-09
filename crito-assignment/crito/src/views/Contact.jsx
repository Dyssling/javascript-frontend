import { useState, useEffect } from 'react'
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';
import ContactMap from '../components/ContactMap';
import Top from '../components/Top';

function Contact() {
  useEffect(() => {
    document.title = "Contact - Crito";
  }, [])

  return (
    <>
      <Top url="/" urlTitle="Home" here="Contact" header="Let's Connect" />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
    </>
  )
}

export default Contact