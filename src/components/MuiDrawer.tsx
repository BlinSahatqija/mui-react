import React from 'react'
import {Drawer, Box, Typography, IconButton, Link} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from 'react'

const MuiDrawer = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
    <IconButton
        size = 'large'
        edge = 'start'
        color='inherit'
        aria-label='logo'
        onClick = {()=> setIsDrawerOpen(true)}
    >
        <MenuIcon></MenuIcon>
    </IconButton>

    <Drawer
        anchor='left'
        open={isDrawerOpen}
        onClose={()=> setIsDrawerOpen(false)}
    >
        <Box p = {2} width='250px' textAlign='center' role='presentation'>
            <Typography variant='h6' component= 'div'>
                Side panels
            </Typography>
            <div>
                Menyja kryesore
            </div>
            <Link href='#' color='error' underline='hover'>Linku i trete</Link>
        </Box>
    </Drawer>
    </>
  )
}

export default MuiDrawer
