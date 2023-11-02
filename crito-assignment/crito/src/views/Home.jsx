import { useState, useEffect } from 'react'
import Showcase from '../components/Showcase'
import Logos from '../components/Logos'

function Home() {
  useEffect(() => {
    document.title = "Home - Crito";
  })

  return (
    <>
      <Showcase />
      <Logos />
    </>
  )
}

export default Home
