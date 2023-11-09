import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import '../assets/scss/components/ArticleDetails.css'

const ArticleDetails = () => {
    const [articleData, setArticleData] = useState({});
    const { id } = useParams();

    const getArticle = async (article, month, day, year) => {
        article = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`);
        article = await article.json();

        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        month = months[parseInt((article.published.substring(5, 7))) - 1];
        day = article.published.substring(8, 10);
        year = article.published.substring(0, 4);

        article.month = month;
        article.day = day;
        article.year = year;

        setArticleData(article);
    }
  
    useEffect(() => {
      getArticle();
    }, [id])

  return (
    <section className="article-details-section">
        <div className="article-container">
            <h2>
                {articleData.title}
            </h2>
            <div className="details-container">
                <p>
                    {articleData.month} {articleData.day}, {articleData.year}
                </p>
                <div className="dot"></div>
                <p>
                    {articleData.category}
                </p>
                <div className="dot"></div>
                <p>
                    {articleData.author}
                </p>
            </div>
            <img src={articleData.imageUrl} />
            <p className="article-content">
                {articleData.content}
            </p>
            <div className="article-category">
                {articleData.category}
            </div>
        </div>
    </section>
  )
}

export default ArticleDetails