import React from 'react'
import { Link } from 'react-router-dom'
import Element from '../assets/images/Element.svg'
import '../assets/scss/components/Top.css'

const Top = ({url, urlTitle, here, header}) => {
  return (
    <section className="top">
        <img className="element" src={Element} alt="Decorative lines" />
        <div className="breadcrumb">
            <Link to={url}>{urlTitle}</Link>
            <a href="#">{here}</a>
        </div>
        <h1>
            {header}
        </h1>
    </section>
  )
}

export default Top