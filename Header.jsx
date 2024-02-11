import React, { useState } from 'react'
import { Box, Typography, AppBar, Toolbar, IconButton, Drawer, Divider } from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import '../../styles/HeaderStyle.css'
import Logo from '../../img/logo.svg'
const Header = () => {
  const [mobile, setMobile] = useState(false);

  const HandlerToggle = () => {
    setMobile(!mobile)
  }
  const drawer = (
    <Box onClick={HandlerToggle} sx={{ textAlign: 'center' }}>
      <FastfoodIcon />
      <Typography color={'goldenrod'}
        variant='h6'
        component='div'
        sx={{ flexGrow: 1 ,my:2}}
      >
        <img src={Logo} height={'50'} width='120'/>
      </Typography>
      <Divider />

      <ul className='mobile-menu'>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/menu'}>Menu</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li>
          <Link to={'/contact'}>Contact</Link>
        </li>

      </ul>

    </Box>
  )
  return (
    <>
      <Box>
        <AppBar component={'nav'} sx={{ bgcolor: 'black' }}>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              sx={{
                my: 2,
                display: { sm: 'none' }
              }}
              onClick={HandlerToggle}
            >
              <MenuIcon />
            </IconButton>
            <FastfoodIcon />
            <Typography color={'goldenrod'}
              variant='h6'
              component='div'
              sx={{ flexGrow: 1 }}
            >
              <img src={Logo} height={'50'} width='250'/>

            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <ul className='navigation-menu'>
                <li>
                  <Link to={'/'}>Home</Link>
                </li>
                <li>
                  <Link to={'/menu'}>Menu</Link>
                </li>
                <li>
                  <Link to={'/about'}>About</Link>
                </li>
                <li>
                  <Link to={'/contact'}>Contact</Link>
                </li>

              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component='nav'>
          <Drawer variant='temporary' open={mobile} onClose={HandlerToggle}
            sx={{
              display: {
                xs: 'block', sm: 'none',
                "& .MuiDrawer-paper": {
                  boxSizing: 'border-box',
                  width: '150px',
                }

              }
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box >
        <Toolbar/>

        </Box>
      </Box>
    </>
  )
}

export default Header