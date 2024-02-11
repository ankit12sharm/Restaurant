import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'
const About = () => {
  return (
    <Layout>
      <Box sx={{
        my: 25,
        textAlign: 'center',
        p: 2,
        '& p': {
          textAlign: 'justify'
        },
        '& h4': {
          my: 2,
          fontSize: '4rem'
        },
        '@ media (max-width:600px)': {
          mt: 0,
          '& h4': {

            fontSize: '1.8rem'
          },
        }
      }}>
        <Typography variant='h4'>
          Welcome To My Restaurant
        </Typography>
        <p>
          A restaurant is a business establishment that prepares and serves food and drinks to customers. Restaurants vary widely in terms of cuisine, ambiance, and service style. They can range from casual diners and fast-food outlets to fine dining establishments with elaborate menus and upscale decor. Restaurants provide a place for people to socialize, celebrate special occasions, or simply enjoy a meal outside of their own home.</p>
        <br />
        <p>Wine Selection: Enhance your dining experience with a thoughtfully curated selection of wines from renowned vineyards worldwide. Our experienced sommeliers are dedicated to guiding you through our exquisite wine list, ensuring the perfect pairing to elevate your palate.
        Entertainment: Elevate your dining experience with captivating live music performances and themed events, adding an extra layer of excitement to your visit. Relax, unwind, and let the rhythmic melodies enrich your culinary journey with unforgettable memories.
        Ambiance: Immerse yourself in an inviting atmosphere where contemporary allure harmonizes with timeless allure. Whether it's a romantic rendezvous or a joyous celebration, our chic decor and warm ambiance provide the perfect backdrop for unforgettable moments with loved ones.
        </p>
      </Box>
    </Layout>
  )
}

export default About;