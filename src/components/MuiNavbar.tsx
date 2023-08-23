import React, {useState} from 'react'
import {AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem} from '@mui/material'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const MuiNavbar = () => {
    const [anchorElementi, setAnchorElementi] = useState<null |HTMLElement>(null);

    const hapur = Boolean(anchorElementi)

    const handleClick=(event:React.MouseEvent<HTMLButtonElement>)=>{
        setAnchorElementi(event.currentTarget)
    }

    const handleClose=()=>{
        setAnchorElementi(null)
    }


    return(
        <AppBar position='static'>
            <Toolbar>
                <IconButton 
                    size='large'
                    edge='end'
                    color='inherit'
                    aria-label='logo'>
                        <CatchingPokemonIcon/>
                </IconButton>

                <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
                    POKEMON APP
                </Typography>

                <Stack direction='row' spacing={2}>
                    <Button color='inherit'>Home</Button>
                    <Button color='inherit'>Products</Button>

                    <Button 
                        color='inherit'
                        id='resources-button'
                        onClick={handleClick}
                        aria-controls={hapur ? 'resources-menu':undefined}
                        // aria-haspopup='true'
                        aria-expanded= {hapur ? 'true' : undefined}
                        endIcon ={<KeyboardArrowDownIcon/>}
                    >
                        Resources
                    </Button>

                    <Button color='inherit'>About</Button>
                    <Button color='inherit'>Login</Button>
                </Stack>

                <Menu 
                    id='resources-menu'
                    anchorEl={anchorElementi}
                    open={hapur}
                    MenuListProps={{
                        "aria-labelledby":'resourves-button'
                    }}
                    onClose={handleClose}
                >
                    <MenuItem>Blog</MenuItem>
                    <MenuItem>Podcast</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}

export default MuiNavbar
