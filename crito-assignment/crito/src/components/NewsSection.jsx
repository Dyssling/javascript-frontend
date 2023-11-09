import React, {useContext} from 'react'
import '../assets/scss/components/NewsSection.css'
import Button from './Button'
import NewsGrid from './NewsGrid'

const NewsSection = ({className}) => {
  return (
    // <!-- News sektion -->
        <section className={`news-section${className ? (" " + className) : ("")}`}>
            <div className="news-section-container">
                <div className="news-header">
                    <div className="news-header-container">
                        <h6>
                            Articles & News
                        </h6>
                        <h2>
                            Get Every Single Article & News
                        </h2>
                    </div>
                    <Button className="news-button" type="transparent" text="Browse Articles" url="/news" />
                </div>
                {/* <!-- Grid sektion för news --> */}
                <NewsGrid sliceValue={3} />
                {/* <!-- Såna där prickar igen --> */}
                <div className="dot-container">
                    <button className="here"></button>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
            </div>
        </section>
  )
}

export default NewsSection