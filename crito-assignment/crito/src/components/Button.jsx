import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../assets/scss/components/Button.css'

const Button = ({type, text, url, className}) => {
  const [typeClass, setTypeClass] = useState("login-button"); //Vet inte om det är nödvändigt att använda useState och useEffect för att sätta klassen på knappen här, jag gjorde det bara för att jag har förstått att man ska undvika att bara köra vanliga funktioner rakt upp-och-ner i en funktionell komponent. Men en liten switch hade kanske varit lugnt att köra innan renderingen?
  useEffect(() => {
    switch(type){
      case "yellow":
          break;
      case "transparent":
          setTypeClass("login-button learn-more");
          break;
      case "black":
        setTypeClass("login-button black");
        break;
    }
  }, [])
    
  return (
    <Link className={`${typeClass}${className ? (" " + className) : ("")}`} to={url}>{text} <i className="fa-solid fa-arrow-up-right"></i></Link> //Lite conditional rendering här, så att en "undefined" klass inte ska läggas till när man inte specificerar className
  )
}

export default Button