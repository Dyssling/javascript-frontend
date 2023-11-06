import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './views/Home.jsx';
import News from './views/News.jsx';
import NewsDetails from './views/NewsDetails.jsx';
import Contact from './views/Contact.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './assets/scss/core/Base.css'
import './assets/scss/core/Wrapper.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <div className="wrapper">
      <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/news" element={<News />} />
            <Route path="/news-details" element={<NewsDetails />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
    </div>
    </BrowserRouter>
  </React.StrictMode>
)
