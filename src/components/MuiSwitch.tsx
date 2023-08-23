import React, {useState} from 'react'
import {Box, FormControlLabel, Switch} from '@mui/material'

const MuiSwitch = () => {
    const [klikuar, setKlikuar] = useState(false);
    console.log(klikuar)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setKlikuar(e.target.checked)
    }
  return (
    <Box>
        <FormControlLabel
            label = 'dark mode'
            control={<Switch checked={klikuar} onChange={handleChange} size='medium' color='error'/>}
        />
    </Box>
  )
}

export default MuiSwitch
