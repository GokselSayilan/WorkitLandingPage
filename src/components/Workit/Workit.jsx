import React from 'react'
// components
import Header from '../Header/Header'
import Feed from '../Feed/Feed'
import Footer from '../Footer/Footer' 

//styles
import './workit.css'

function Workit() {
  return (
    <div className='workit'>
      <Header/>
      <Feed/>
      <Footer/>
    </div>
  )
}

export default Workit