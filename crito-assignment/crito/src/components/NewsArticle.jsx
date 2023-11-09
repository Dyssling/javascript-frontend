import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/scss/components/NewsArticle.css'

const NewsArticle = ({url, day, month, imageSource, category, title, text}) => {
  return (
    <Link className="news-grid-container" to={url}>
        <div className="date">
            <h4>{day} <span>{month}</span></h4>
        </div>
        <img src={imageSource} alt=" " />
        <p>
            {category}
        </p>
        <h4>
            {title}
        </h4>
        <p>
            {text}
        </p>
    </Link>
  )
}

export default NewsArticle