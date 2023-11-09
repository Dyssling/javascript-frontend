import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import { ArticlesContext } from '../contexts/ArticlesContext'
import '../assets/scss/components/RecentPosts.css'


const RecentPosts = () => {
  const {articleData} = useContext(ArticlesContext);
  return (
    <>
      {(articleData.slice(0, 4)).map(data => ( //Kör en liten slice här igen, eftersom jag bara vill mappa ut 4 artiklar
        <Link key={data.id} className="recent-post-container" to={`/news-details/${data.id}`}>
          <p className="recent-post-title">{data.title}</p>
          <p className="recent-post-date">{data.month} {data.day}, {data.year}</p>
        </Link>
      ))}
    </>
  )
}

export default RecentPosts