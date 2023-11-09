import React from 'react'
import NewsGrid from '../components/NewsGrid'
import '../assets/scss/components/OurNews.css'

const OurNews = () => {
  return (
    <section className="our-news-section">
        <h2>
            Our News & Articles
        </h2>
        <NewsGrid />
        <div className="page-navigation">
            <button className="page-button arrow"><i className="fa-solid fa-chevron-left"></i></button>
            <button className="page-button active">1</button>
            <button className="page-button">2</button>
            <button className="page-button">3</button>
            <button className="page-button">...</button>
            <button className="page-button">9</button>
            <button className="page-button arrow"><i className="fa-solid fa-chevron-right"></i></button>
        </div>
    </section>
  )
}

export default OurNews