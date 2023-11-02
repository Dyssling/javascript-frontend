import React from 'react'
import '../assets/scss/components/Button.css'

const Button = ({type, text, url}) => {
  let typeClass = ""; //NOTE TO SELF: Tror inte att man ska köra sånhär kod på detta viset i en function component, eftersom det skapar sideffekter. kolla upp det mer sen
    switch(type){
        case "yellow":
            typeClass = "login-button";
            break;
        case "transparent":
            typeClass = "login-button learn-more";
            break;
    }
    
  return (
    <a className={typeClass} href={url}>{text} <i className="fa-solid fa-arrow-up-right"></i></a>
  )
}

export default Button