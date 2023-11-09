import { useEffect } from 'react'
import Top from '../components/Top'
import ArticleDetails from '../components/ArticleDetails';
import Sidebar from '../components/Sidebar';
import NewsSection from '../components/NewsSection';
import '../assets/scss/components/NewsDetails.css'

function NewsDetails() {
  useEffect(() => {
    document.title = "News Details - Crito";
  }, [])

  return (
    <>
      <Top url="/" urlTitle="Home" here="News" header="News & Articles" />
      <div className="article-and-sidebar">
        <ArticleDetails />
        <Sidebar />
      </div>
      <NewsSection className="darker-background" />
    </>
  )
}

export default NewsDetails