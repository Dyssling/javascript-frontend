import React, {useContext} from 'react'
import { ArticlesContext } from '../contexts/ArticlesContext'
import NewsArticle from './NewsArticle'
import '../assets/scss/components/NewsGrid.css'

const NewsGrid = ({sliceValue}) => {
    const {articleData} = useContext(ArticlesContext);
  return (
    <div className="news-grid">
        {sliceValue ? ((articleData.slice(0, sliceValue)).map(data => ( //Jag gör en slice för att den inte ska mappa mer än sliceValue mängden artiklar
            <NewsArticle key={data.id} url={`/news-details/${data.id}`} day={data.day} month={data.month} imageSource={data.imageUrl} category={data.category} title={data.title} text={data.content} />
        ))) : (
        articleData.map(data => ( //Om sliceValue inte har definierats så hämtas alla artiklar
            <NewsArticle key={data.id} url={`/news-details/${data.id}`} day={data.day} month={data.month} imageSource={data.imageUrl} category={data.category} title={data.title} text={data.content} />
        ))
        )}
    </div>
  )
}

export default NewsGrid