import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ArticlesContextProvider} from './contexts/ArticlesContext.jsx';
import Home from './views/Home.jsx';
import News from './views/News.jsx';
import NewsDetails from './views/NewsDetails.jsx';
import Contact from './views/Contact.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './assets/scss/core/Base.css';
import './assets/scss/core/Wrapper.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
          <div className="wrapper">
            <Header />
            <main>
              <ArticlesContextProvider> {/* Note to self: När ett useState körs i mitt context så sker såklart en omrendering av context komponenten, vilket innebär att dess children också renderas om. Därför sätter jag den INNANFÖR main taggen på detta viset, eftersom allting utanför main taggen ändå inte har något behov av just detta contextet */}
                <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="/news" element={<News />} />
                  <Route path="/news-details/:id" element={<NewsDetails />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </ArticlesContextProvider>
            </main>
            <Footer />
          </div>
    </BrowserRouter>
  </React.StrictMode>
)
