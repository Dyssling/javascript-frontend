import {createContext, useState, useEffect} from 'react'

//(dessa förklaringar är bara för att jag själv ska förstå vad jag håller på med)

export const ArticlesContext = createContext(); //Här skapar jag ett context som heter ArticlesContext, och jag exporterar det så att jag kan använda det i andra komponenter.

//För att jag ska kunna komma åt variablar och liknande från contextet som jag skapat, så måste jag göra en "provider" där jag skickar iväg dessa till child komponenterna.

export const ArticlesContextProvider = ({children}) => { //Men först måste jag såklart skapa variablarna och liknande, och även definiera och köra funktionerna, så att variablarna/objekten får de värden som jag vill ha. 
    const [articleData, setArticleData] = useState([]);

    const getArticles = async (articles, month, day, year) => {
        articles = await fetch("https://win23-assignment.azurewebsites.net/api/articles");
        articles = await articles.json();
        
        articles.map((data) => { //Denna funktionen tar "published" elementet och konverterar det till en månad (förkortning med bokstäver) och till en dag (siffra). Sedan lägger den till dessa som nya element i objektet
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

            month = months[parseInt((data.published.substring(5, 7))) - 1];
            day = data.published.substring(8, 10);
            year = data.published.substring(0, 4);

            data.month = month;
            data.day = day;
            data.year = year;
        })

        setArticleData(articles);
    }

    useEffect(() => {
        getArticles();
    }, [])

    return ( //Funktionen returnerar sedan Providern för mitt context, där ett value skickas med. Valuet innehåller ett objekt med de variablar som jag sedan vill att man ska kunna komma åt.
        <ArticlesContext.Provider value={{articleData}}>
            {children}
        </ArticlesContext.Provider>
    )
}