import React from 'react'
import Layout from '../components/Layout/Layout';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CallIcon from '@mui/icons-material/Call';
const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 5, ml: 10, '& h4': { fontWeight: 'bold', mb: 2 } }}>
        <Typography variant='h4'>
          My Restaurant Contact Us
        </Typography>
        <Typography sx={{ my: 5,  '& h5': { fontWeight: 'bold' } }}>


          🌟 Cuisine: Our menu features a tantalizing selection of  cuisine, expertly crafted by our talented chefs using the finest ingredients sourced locally and globally. From savory starters to decadent desserts, each dish is a masterpiece designed to delight your palate.

          🍸 Ambiance: Step into our inviting ambiance, where modern elegance meets timeless charm. Whether you're enjoying an intimate dinner for two or celebrating a special occasion with friends and family, our stylish decor and welcoming atmosphere set the stage for an unforgettable dining experience.

          🎶 Entertainment: Enhance your evening with live music performances or themed events, adding an extra layer of excitement to your dining experience. Sit back, relax, and let the rhythm of the music elevate your meal to new heights.

          🍷 Wine Selection: Complement your meal with a carefully curated selection of wines from around the world, chosen to perfectly complement the flavors of our dishes. Our knowledgeable sommeliers are on hand to assist you in finding the perfect pairing for your palate.
        </Typography>
      </Box>
      <Box sx={{
        m: 3, width: '600px', ml: 10, '@media (max-width:600px)': {
          width: '280px'
        },
      }}>
        <TableContainer component={Paper}>
          <Table aria-label='contact-table'>
            <TableHead>
              <TableRow>
                <TableCell sx={{ bgcolor: 'black', color: 'white' }}
                  align='center'
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: 'red', pt: 1 }} /> 1800-180-000(TollFree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <ContactMailIcon sx={{ color: 'skyblue', pt: 1 }} /> sharmaankit7726@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: 'green', pt: 1 }} /> 7726904074
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact; 