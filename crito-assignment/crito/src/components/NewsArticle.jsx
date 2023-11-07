import React from 'react'
import '../assets/scss/components/NewsArticle.css'

const NewsArticle = ({url, day, month, imageSource, category, title, text}) => {
  return (
    <a className="news-grid-container" href={url}>
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
    </a>
  )
}

export default NewsArticle