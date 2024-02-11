import React from 'react'
import Layout from '../components/Layout/Layout'
import {Link} from 'react-router-dom'
import banner from '../img/banner.jpeg'
import '../styles/homestyle.css'
const Home = () => {
  return (
    <Layout>
        <div className='home' style={{backgroundImage:`url(${banner})`}}>
          <div className='headerContainer'>
           <h1>Food Website </h1>
           <p>Best food In India</p>
           <Link to={'/menu'}>
           <button>
            Order Now
           </button>
           </Link>
          </div>
        </div>
    </Layout>
  )
}

export default Home