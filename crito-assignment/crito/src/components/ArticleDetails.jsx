import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import '../assets/scss/components/ArticleDetails.css'
import Button from './Button';

const ArticleDetails = () => {
    const [articleData, setArticleData] = useState({});
    const { id } = useParams();

    const getArticle = async (article, month, day, year) => {
        try{
            article = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`);
            if (!article.ok){ //Om status meddelandet från responsen INTE är ok, alltså om det har blivit nåt fel, så sätts article parametern till null, och en error skapas
                article = null;
                throw new Error("Error");
            }
        }

        catch(error){ //Här görs en catch om det blir en error, så att man kan vara säker på att resten av koden ändå körs. "Error" loggas i konsolen
            console.log(error);
        }

        if (article){ //Om det inte har blivit något fel så kommer article INTE vara null, och då körs denna IF sats
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

        else{ //Annars uppdateras articleData värdet till null
            setArticleData(article);
        }
    }
  
    useEffect(() => { //Denna effekten körs på första renderingen, och varje gång som id parametern ändras
      getArticle();
    }, [id])

  return (
    <section className="article-details-section">
        {articleData ? ( //Om articleData INTE är null så renderas artikeln ut
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
        ) : ( //Annars renderas detta istället
            <div className="article-container article-not-found">
                <h2>
                    Article Not Found
                </h2>
                <p className="article-content">
                    We could not find the article you were looking for.
                </p>
                <Button className="not-found-button" type="yellow" url="/news" text="Browse Articles" />
            </div>
        )}
    </section>
  )
}

export default ArticleDetails