import React from 'react'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import {useState} from 'react'

const MuiBottomNavigation = () => {
    const [vlera, setVlera] = useState(0);
  return (
    <BottomNavigation
        sx ={{width: '100%', position: 'absolute', bottom: 0}}
        value={vlera}
        onChange={(event, vleraRe)=>{setVlera(vleraRe)}}
        showLabels
    >
        <BottomNavigationAction label='Home' icon={<HomeIcon/>}/>
        <BottomNavigationAction label='Favorites' icon={<FavoriteIcon/>}/>
        <BottomNavigationAction label='Person' icon={<PersonIcon/>}/>
    </BottomNavigation>
  )
}

export default MuiBottomNavigation
