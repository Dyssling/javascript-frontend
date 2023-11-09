import { useState, useEffect } from 'react'
import Top from '../components/Top'
import OurNews from '../components/OurNews'
import Signup from '../components/Signup'

function News() {
  useEffect(() => {
    document.title = "News - Crito";
  }, [])

  return (
    <>
      <Top url="/" urlTitle="Home" here="News" header="News & Articles" />
      <OurNews />
      <Signup />
    </>
  )
}

export default News