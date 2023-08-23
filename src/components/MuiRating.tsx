import {Stack, Rating } from '@mui/material'
import React, {useState} from 'react'

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const MuiRating = () => {
    const [vlera, setVlera] = useState<number | null>(null);
    console.log({vlera})

    const handleChange = (_event: React.ChangeEvent<{}>, vleraRe: number | null) =>{
        setVlera(vleraRe)
    }

  return (
    <Stack spacing = {2}>
        <Rating
        value= {vlera}
        onChange = {handleChange}
        precision={0.5}
        size='large'
        icon= {<FavoriteIcon fontSize='inherit'/>}
        emptyIcon={<FavoriteBorderIcon fontSize='inherit' />}
        />
    </Stack>
  )
}

export default MuiRating
