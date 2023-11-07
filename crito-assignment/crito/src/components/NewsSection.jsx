import React, {useContext} from 'react'
import { ArticlesContext } from '../contexts/ArticlesContext'
import '../assets/scss/components/NewsSection.css'
import Button from './Button'
import NewsArticle from './NewsArticle'

const NewsSection = () => {
    const {articleData} = useContext(ArticlesContext);
  return (
    // <!-- News sektion -->
        <section className="news-section">
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
                    <Button className="news-button" type="transparent" text="Browse Articles" url="#" />
                </div>
                {/* <!-- Grid sektion för news --> */}
                <div className="news-grid">
                    {(articleData.slice(0, 3)).map(data => ( //Jag gör en slice för att den inte ska mappa mer än 3 artiklar
                        <NewsArticle key={data.id} url="#" day={data.day} month={data.month} imageSource={data.imageUrl} category={data.category} title={data.title} text={data.content} />
                    ))}
                </div>
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